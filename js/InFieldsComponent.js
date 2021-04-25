import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";
import { globContainer } from "./script.js";

export default class InFieldsComponent {

    constructor(parent, { id, tag, containerClass, elementClass, labelText, options }) {
        this.className = InFieldsComponent;
        this.id = id;
        this.tag = tag;
        this.containerClass = containerClass;
        this.elementClass = elementClass;
        this.labelText = labelText;
        this.options = options;
        this._DOMelements = {
            parent: parent,
            component: document.createElement('p'),
            selfEl: document.createElement(`${tag}`),
            labelEl: document.createElement("label"),
        }
    }

    // label = this.createElement("label", {for: this.id}, this.label);
    // const select = this.createElement("select", this.classes, selectOptions); // Єто типа наш кастомный метод из класса Conponent, котрый умеет создавать компоненты
    render() {
        const { parent, selfEl, labelEl, component } = this._DOMelements;
        const { id, tag, containerClass, elementClass, labelText, options } = this;
        if (tag === 'select') {
            for (let i = 0; i < options.length; i++) {
                selfEl.add(new Option(options[i].text, options[i].value, options[i].defaultSelected, options[i].defaultSelected));
                /* в предыдущ стр. мы указали выбрать Терапевта по умолчанию (true, true).  Альтернативные способы:
                selectDoctorEl.innerText = "запись к Кардиологу";    selectDoctorEl.value = "Терапевт";   selectDoctorEl.selectedIndex = 2;  */
                selfEl.size = options.length; // TODO  пока что раскрыли select полностью
            }
        }

        selfEl.className = elementClass;
        selfEl.id = id;

        selfEl.addEventListener("click", (e) => {
            this.changeDoctor(e); //TODO потом переписать с проверкой это select/input or textarea
        });
        labelEl.htmlFor = `${id}`;
        labelEl.innerText = labelText;
        labelEl.classList.add('label_test')

        component.className = containerClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить

        labelEl.style.display = "block";   //TODO для теста. Потом эту строку удалить

        component.append(labelEl, selfEl);
        parent.append(component);
    }

    changeDoctor({ target }) {
        const form = document.getElementById('visit-form');
        form.remove();


        switch (target.value) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(document.querySelector(globContainer), cfig.cardiologist);
                visitCardiologist.render();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(document.querySelector(globContainer), cfig.dentist);
                visitDentist.render();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(document.querySelector(globContainer), cfig.therapist);
                visitTherapist.render();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                break;
            default:
        }

    }


    // getSelected() {
    //     const {selfEl} = this._DOMelements;
    //     const a = selfEl.options[selfEl.selectedIndex].value;
    //     const b = selfEl.selectedIndex;
    //     const text = selfEl.text;
    //     const value = selfEl.value;
    //     return [a, b, text, value];
    //}

    //
    // remove() {
    //     const {component} = this._DOMelements;
    //     component.remove();
    // }
    //
    // hide() {
    //     const {component} = this._DOMelements;
    //     component.style.opacity = "0";
    // }
    //
    // show() {
    //     const {component} = this._DOMelements;
    //     component.style.opacity = "1";
    // }
}
