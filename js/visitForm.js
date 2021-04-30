import Form from "./form.js"
import {CreateBtn} from "./createBtn.js";
import InFieldsComponent from "./InFieldsComponent.js";
import * as cfg from "../componentsDeclaration/configElements.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import {CardHandler} from "./card.js";
import {newCardHandle} from "./newCardHandle.js"

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

    constructor(parent, {id, tag, componentClass, title}) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitForm";
    }

    static renderIdleForm() { // общий метод рендеринга исходной формы  selectForm
        if ( document.getElementById("btn_log") ) document.getElementById("btn_log").remove();
        // if ( document.getElementById("visit-form") ) document.getElementById("visit-form").remove();
        const selectForm = new VisitForm(document.getElementById("modal"), cfig.visitFormCfg);
        selectForm.render();
    }

    bodyCloseHandler({target}) { //TODO перестало работать закрывание формы по клику вне формы

        if (target.closest('#visit-form') || target.closest('#select-form') || target.tagName === "OPTION" ) return;
        else
        {
            if (document.getElementById("visit-form")) document.getElementById("visit-form").remove();

            // VisitForm.renderIdleForm(); // и вернуться к дефолтной форме выбора врача!
        }
    }



    static formSubmitHandler() {
        try {
            const card = new CardHandler(); //здесь получаю просто сырой ОБЪЕКТ значений из инпут-полей формы
/* card.correctUndefinds();  - этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
                        лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";*/
        newCardHandle(card); //отправил новую карточку на сервер, в рендер и в locakStorage
        }
        catch (err) {
            (console.log(err.name, err.message))
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

    // создаём кнопки closeBtn, createBtn для формы ввода пациентов
    static showButtons(innerComponent) {
        const btnContainer = document.createElement("div");
        btnContainer.className = "visit-form__button-container";
        const closeBtn = new CreateBtn(btnContainer, cfg.closeBtnCfg);
        const createBtn = new CreateBtn(btnContainer, cfg.createCardBtnCfg);
        const resetBtn = new CreateBtn(btnContainer, cfg.resetBtnCfg);
        innerComponent.append(btnContainer);
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
