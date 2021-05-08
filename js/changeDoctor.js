import {doctorSelect} from "../componentsDeclaration/configElements.js"
import * as visits from "./classesExtend.js"
import * as cfig from "../componentsDeclaration/configForms.js"
import VisitForm from "./visitForm.js"
import Server from "./server.js"
import {visitorProps, visitorPropClasses} from "../componentsDeclaration/configVisProp.js"

async function fillFormFromCard(cardId) {
    //здесь берём из БД объект с текущим номером cardId и заполняем его в форму для редактирования.
    // по сабмиту - исходную форму с номером id удалить из БД, а новую-оправить на сервер
 const editedCard = await Server.getOneCard(cardId, Server.token);// получил объект редактируемой карточки
 const vp=[]; //в этот массив захвачу поля формы, в value которых потом вставлю значения из объекта editedCard
 for (let i=0; i< visitorProps.length; i++) {
     vp[i] = document.getElementById( `${visitorPropClasses[i]}` );//захватываю поля с нужными классами
     if (editedCard[visitorProps[i]]) vp[i].value = editedCard[visitorProps[i]]; //присваиваю нужным полям соотв.значения из editedCard
 }
    const createBtn = document.getElementById('create-btn');
    createBtn.removeEventListener('click', VisitForm.formSubmitHandler);
    createBtn.addEventListener("click", (e)=>VisitForm.saveModifiedCard(cardId) );
    createBtn.innerText = "Изменить карточку";
}

export default function changeDoctor({target}, id, doctorFromCard){ //если id не придет- то мы в
    //режиме нового визита. Если пришел id - мы редактируем существующий по id карточки
    let selectValue; //это будет либо "врач" из target если пришли сюда из новой формы, либо будет "врач" из редактируемой карточки
    if (!id && !doctorSelect.options.some(el=> el.value === target.value)  ) return; //второй if проверяет ТОЛЬКО, если не прилетел доктор из редактируемойкарточки (т.е. если мы в режиме получения карточки только из формы)
    else {
        if ( document.getElementById("visit-form")) document.getElementById("visit-form").remove();
        let visitFormParent = document.getElementById("select-form"); //форму визита создаем внутри формы выбора доктора (если она существует)
        if(!visitFormParent) visitFormParent = document.getElementById("modal"); //для режима редактирования карточки нужно брать контейнер в модалке
        if (doctorFromCard) selectValue = doctorFromCard; else selectValue = target.value; //в завис-ти от режима, выбор либо по врачу из формы, либо по врачу из карточки

        switch (selectValue) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(visitFormParent, cfig.cardiologistCfg);
                visitCardiologist.renderHeader();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                visitCardiologist.render();
                VisitForm.showButtons(visitCardiologist._DOMelements.component);
                if (id) fillFormFromCard(id).then(); //заполнить форму данными из карточки
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(visitFormParent, cfig.dentistCfg);
                visitDentist.renderHeader();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                visitDentist.render();
                VisitForm.showButtons(visitDentist._DOMelements.component);
                if (id) fillFormFromCard(id).then(); //заполнить форму данными из карточки
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(visitFormParent, cfig.therapistCfg);
                visitTherapist.renderHeader();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                visitTherapist.render();
                VisitForm.showButtons(visitTherapist._DOMelements.component);
                if (id) fillFormFromCard(id).then(); //заполнить форму данными из карточки
                break;
            default:
        }}
}
