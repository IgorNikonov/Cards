import {globContainerID} from "../componentsDeclaration/configInFieldComp.js";
//импорт  классов
import VisitForm from "./visitForm.js";
//импорт конфигураций:
import * as cfig from "../componentsDeclaration/configForms.js"


export default class Form {
    constructor(parent, {id, tag, componentClass, title} ) {
        this.ES6classTitle = "Form";
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
        const {id, componentClass, title} = this;
        const {parent, component, titleEl, returnBut} = this._DOMelements;

        // document.getElementById('create-visit-btn').remove(); //сходу удалить себя
        component.className = componentClass;
        component.id = id;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить
        titleEl.innerText = title;
        returnBut.innerText = "К предыдущему меню";
        returnBut.addEventListener("click", ()=> this.showPreviousMenu() );
        component.append(titleEl);
        component.append(returnBut);
        parent.prepend(component);
    }
    showPreviousMenu(){
        this.remove();
        switch (this.ES6classTitle) {
            case "VisitForm":
                const form = new Form(document.querySelector(globContainerID), cfig.form);
                form.render();
                break;
                case "VisitCardiologist":
                case     "VisitDentist":
                case   "VisitTherapist":
                const visitForm = new VisitForm(document.querySelector(globContainerID), cfig.visitFormCfg);
                    visitForm.render();
                break;
            default:

        }
    }

    remove(){
        const {component} = this._DOMelements;
        component.remove();
    }

}