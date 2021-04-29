import Form from "./form.js"
import {CreateBtn} from "./createBtn.js";
import InFieldsComponent from "./InFieldsComponent.js";
import * as cfg from "../componentsDeclaration/configElements.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import {CardHandler} from "./card.js";
import Desk from "../LizaModal/desk.js";
import {deskComp} from "../LizaModal/main.js";
// import {cardsToStore} from "../LizaModal/main.js"
import Server from "./server.js";

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

    constructor(parent, {id, tag, componentClass, title}) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitForm";
    }

    static renderIdleForm() { // общий метод рендеринга исходной формы  selectForm
        if ( document.getElementById("btn_log") ) document.getElementById("btn_log").remove();
        if ( document.getElementById("visit-form") ) document.getElementById("visit-form").remove();
        const selectForm = new VisitForm(deskComp, cfig.visitFormCfg);
        selectForm.render();
    }

    bodyCloseHandler({target}) { //TODO перестало работать закрывание формы по клику вне формы
        const form_ = document.querySelector("form");
        if (target.closest('form')) {
        } else if (form_.id !== cfig.visitFormCfg.id) { // если это не основная форма выбора врача -то закрыть
            form_.remove();
            VisitForm.renderIdleForm(); // и вернуться к дефолтной форме выбора врача!
        }
    }



    static async formSubmitHandler() {
        
        try {
            const card = new CardHandler(); //здесь получаю просто сырой ОБЪЕКТ значений
            // card.correctUndefinds();
                /*этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
                        лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";*/
            const newCard = await card.create();
            // cardsToStore.push(newCard);

            Desk.addCard(newCard);

            let allCards = await Server.getAllCards(Server.token);

            localStorage.setItem('cards', JSON.stringify(allCards));
            console.log(allCards);
        }
        catch (err) {
            (console.log(err))
        }

    }


    static initForm(myForm) {
        myForm.action = "#";
        myForm.setAttribute("acceptCharset", "utf-8");
        myForm.enctype = "application/x-www-form-urlencoded";  //"text/plain";  http://htmlbook.ru/html/form/enctype
        myForm.method = "post";
        myForm.noValidate = true;
        myForm.autocomplete = "off";
        // myForm.addEventListener("submit", () => VisitForm.formSubmitHandler());
    }

    //выполняем эту ф-цию сразу после выбора доктора
    static renderAdditionalFields(innerComponent) {  //innerComponent это и есть наша form к выводу в сервер
        VisitForm.initForm(innerComponent); //в инициализации прописываем все необходимые артибуты формы для работы с сервером

        const visitorLastName = new InFieldsComponent(innerComponent, cfg.visitorLastName);
        visitorLastName.render();

        const visitorName = new InFieldsComponent(innerComponent, cfg.visitorName);
        visitorName.render();

        const visitorPartName = new InFieldsComponent(innerComponent, cfg.visitorPatrName);
        visitorPartName.render();

        const purpose = new InFieldsComponent(innerComponent, cfg.visitPurpose);
        purpose.render();

        const description = new InFieldsComponent(innerComponent, cfg.visitDescription);
        description.render();

        const urgency = new InFieldsComponent(innerComponent, cfg.urgency);
        urgency.render();
    }

    // создаём кнопки closeBtn, createBtn
    static showButtons(innerComponent) {
        const closeBtn = new CreateBtn(innerComponent, cfg.closeBtnCfg);
        const createBtn = new CreateBtn(innerComponent, cfg.createCardBtnCfg);
        const resetBtn = new CreateBtn(innerComponent, cfg.resetBtnCfg);
        closeBtn.render();
        createBtn.render();
        resetBtn.render();
    }

    render() {
        super.render();
        const {component} = this._DOMelements;

        const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
        selectDoctor.render();
        document.addEventListener("click", this.bodyCloseHandler);
    }

}
