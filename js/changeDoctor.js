import {doctorSelect} from "../componentsDeclaration/configElements.js";
import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";
import Server from "./server.js";
export let globIdFlag = undefined;//если !==undefined, тогда используется для удаления редактируемой карточки

async function fillFormFromCard(cardId) {
    //здесь берём из БД объект с номером id и заполняем его в форму для редактирования.
    // по сабмиту - исходную форму с номером id удалить из БД, а новую-оправить на сервер
 console.log(cardId);
    globIdFlag = cardId; //выставили глобальный флаг карточки- для удаления текущей карты потом в ф-ции formSubmitHandler() модуля visitForm.js
 const editedCard = await Server.getOneCard(cardId, Server.token);
 console.log(editedCard);
    const purpose  = document.getElementById("purpose");
    const description = document.getElementById("description");
    const urgency  = document.getElementById("urgency");
    const lastName = document.getElementById("visitor-last-name");
    const name     = document.getElementById("visitor-name");
    const patrName = document.getElementById("visitor-patr-name");
    const pressure = document.getElementById("visitor-pressure");
    const weightIndx = document.getElementById("weight-index");
    const deseases = document.getElementById("visitor-deseases");
    const age      = document.getElementById("visitor-age");
    const lastVisitDate = document.getElementById("last-visit-date");
    if (editedCard.visitPurpose) purpose.value       = editedCard.visitPurpose;
    if (editedCard.visitDescription) description.value   = editedCard.visitDescription;
    if (editedCard.visitUrgency) urgency.value       = editedCard.visitUrgency;
    if (editedCard.lastName) lastName.value      = editedCard.lastName;
    if (editedCard.mainName) name.value          = editedCard.mainName;
    if (editedCard.partName) patrName.value      = editedCard.partName;
    if (editedCard.visitorPressure) pressure.value      = editedCard.visitorPressure;
    if (editedCard.bodyWeightIndex) weightIndx.value    = editedCard.bodyWeightIndex;
    if (editedCard.hadDeseases) deseases.value      = editedCard.hadDeseases;
    if (editedCard.visitorAge) age.value           = editedCard.visitorAge;
    if (editedCard.lastVisitDate) lastVisitDate.value = editedCard.lastVisitDate;

}


export default function changeDoctor({target}, id, doctorFromCard){ //если id не придет- то мы в
    //режиме нового визита. Если пришел id - мы редактируем существующий по id карточки
    let selectValue; //это будет либо "врач" из target если пришли сюда из новой формы, либо будет "врач" из редактируемой карточки
    if (!id && !doctorSelect.options.some(el=> el.value === target.value)  ) return; //второй if проверяет ТОЛЬКО, если не прилетел доктор из редактируемойкарточки (т.е. если мы в режиме получения карточки только из формы)
    else
    {
        if ( document.getElementById("visit-form")) document.getElementById("visit-form").remove();
        let visitFormParent = document.getElementById("select-form"); //форму визита создаем внутри формы выбора доктора (если она существует)
        if(!visitFormParent) visitFormParent = document.getElementById("modal"); //для режима редактирования карточки нужно брать контейнер в модалке
        if (doctorFromCard) selectValue = doctorFromCard; else selectValue = target.value; //в завис-ти от режима, выбор либо по врачу из формы, либо по врачу из карточки
        // switch (target.value) {
        switch (selectValue) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(visitFormParent, cfig.cardiologistCfg);
                visitCardiologist.renderHeader();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                visitCardiologist.render();
                VisitForm.showButtons(visitCardiologist._DOMelements.component);
                if (id) fillFormFromCard(id); //заполнить форму данными из карточки
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(visitFormParent, cfig.dentistCfg);
                visitDentist.renderHeader();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                visitDentist.render();
                VisitForm.showButtons(visitDentist._DOMelements.component);
                if (id) fillFormFromCard(id); //заполнить форму данными из карточки
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(visitFormParent, cfig.therapistCfg);
                visitTherapist.renderHeader();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                visitTherapist.render();
                VisitForm.showButtons(visitTherapist._DOMelements.component);
                if (id) fillFormFromCard(id); //заполнить форму данными из карточки
                break;
            default:
        }}
}
