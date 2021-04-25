//импорт родительских классов
import Form from "./form.js"
import { globContainer } from "./script.js"
//импорт конфигураций:
import InFieldsComponent from "./InFieldsComponent.js";
import * as cfg from "../componentsDeclaration/configInFieldComp.js";
import * as cfig from "../componentsDeclaration/configForms.js";

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

    constructor(parent, { id, tag, componentClass, title }) {
        super(parent, { id, tag, componentClass, title });
        this.className = "VisitForm";
    }

    static renderIdleForm() { // общий метод рендеринга исходной формы  visitForm
        const visitForm = new VisitForm(document.querySelector(globContainer), cfig.visitForm);
        visitForm.render();
    }

    bodyCloseHandler({ target }) {
        const form_ = document.querySelector("form");
        console.log("form_.id= ", form_.id);
        console.dir(target);
        if (target.closest('form')) { }
        else if (form_.id !== cfig.visitForm.id) // если это не основная форма выбора врача -то закрыть
        {
            form_.remove();
            VisitForm.renderIdleForm(); // и вернуться к дефолтной форме выбора врача!
        }
    }

    static cardCloseHandler() {
        document.querySelector("form").remove();
        VisitForm.renderIdleForm(); // и вернуться к дефолтной форме выбора врача!

    };
    static cardCreateHandler() {
        // document.querySelector("form").remove();
    }

    //выполняем эту ф-цию сразу после выбора доктора
    static renderAdditionalFields(innerComponent) {

        const purpose = new InFieldsComponent(innerComponent, cfg.visitPurpose);
        purpose.render();

        const description = new InFieldsComponent(innerComponent, cfg.visitDescription);
        description.render();

        const urgency = new InFieldsComponent(innerComponent, cfg.urgency);
        urgency.render();

        const visitorName = new InFieldsComponent(innerComponent, cfg.visitorName);
        visitorName.render();

        const visitorLastName = new InFieldsComponent(innerComponent, cfg.visitorLastName);
        visitorLastName.render();
        // создаём кнопки
        const closeBtn = document.createElement('button');
        const createBtn = document.createElement('button');
        closeBtn.innerText = "Закрыть";
        closeBtn.classList.add('btn-danger', 'btn-lg', 'form_btn')
        createBtn.innerText = "Создать";
        createBtn.classList.add('btn-success', 'btn-lg', 'form_btn')
        closeBtn.addEventListener("click", () => VisitForm.cardCloseHandler());
        createBtn.addEventListener("click", () => this.cardCreateHandler());
        innerComponent.append(closeBtn, createBtn);
    }

    render() {
        super.render();
        const { component } = this._DOMelements;

        const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
        selectDoctor.render();
        document.addEventListener("click", this.bodyCloseHandler);
    }

}
