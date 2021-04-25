import { globContainer } from "./script.js";
//импорт  классов
import VisitForm from "./visitForm.js";
//импорт конфигураций:
import * as cfig from "../componentsDeclaration/configForms.js"


export default class Form {
    constructor(parent, { id, tag, componentClass, title }) {
        this.className = "Form";
        this.id = id;
        this.componentClass = componentClass;
        this.title = title;
        this._DOMelements = {
            parent: parent,
            component: document.createElement(`${tag}`),
            titleEl: document.createElement('h3'),
            returnBut: document.createElement("button"),
        }
    }
    render() {
        const { id, componentClass, title } = this;
        const { parent, component, titleEl, returnBut } = this._DOMelements;

        component.className = componentClass;
        component.id = id;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить
        titleEl.innerText = title;
        returnBut.innerText = "К предыдущему меню";
        returnBut.classList.add('btn-outline-success', 'return_btn')
        returnBut.addEventListener("click", () => this.showPreviousMenu());
        component.append(titleEl);
        component.append(returnBut);
        parent.prepend(component);
    }
    showPreviousMenu() {
        this.remove();
        switch (this.className) {
            case VisitForm:
                const form = new Form(document.querySelector(globContainer), cfig.form);
                form.render();
                break;
            case "VisitCardiologist":
            case "VisitDentist":
            case "VisitTherapist":
                const visitForm = new VisitForm(document.querySelector(globContainer), cfig.visitForm);
                visitForm.render();
                break;
            default:

        }
    }

    remove() {
        const { component } = this._DOMelements;
        component.remove();
    }
    hide() {
        const { component } = this._DOMelements;
        component.style.opacity = "0";
    }
    show() {
        const { component } = this._DOMelements;
        component.style.opacity = "1";
    }

}