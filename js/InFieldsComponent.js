import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";
import {globContainerID, doctorSelect} from "../componentsDeclaration/configElements.js";

export default class InFieldsComponent {

    constructor(parent, {id, tag, containerClass, elementClass, elementType, elementName, labelText, placeholder, options} ) {
        this.ES6classTitle = InFieldsComponent;
        this.id = id;
        this.tag = tag;
        this.containerClass = containerClass;
        this.elementClass = elementClass;
        if (elementType) this.elementType = elementType;
        if (elementName) this.elementName = elementName;
        if (placeholder) this.placeholder = placeholder;
        if (labelText) this.labelText = labelText;
        if (options) this.options = options;
        this._DOMelements = {
            parent: parent,
            component: document.createElement('p'),
            selfEl: document.createElement(`${tag}`),
            labelEl: document.createElement("label"),
    }
    }
    render() {
        const {parent, selfEl, labelEl, component} = this._DOMelements;
        const { id, tag, containerClass, elementClass, labelText, elementType, elementName, options } = this;
        if (tag === 'select') {
            for (let i=0; i < options.length; i++) {
                selfEl.add( new Option(options[i].text, options[i].value, options[i].defaultSelected, options[i].defaultSelected) );
                /* в предыдущ строке мы указали выбрать Терапевта по умолчанию (true, true).  Альтернативные способы:
                selectDoctorEl.innerText = "запись к Кардиологу";    selectDoctorEl.value = "Терапевт";   selectDoctorEl.selectedIndex = 2;  */
                selfEl.size = options.length; // TODO  пока что раскрыли select полностью
        }   }

        selfEl.className = elementClass;
        if (this.elementName) selfEl.name = this.elementName;
        if (this.elementType) selfEl.type = this.elementType;
        if (this.placeholder) selfEl.placeholder = this.placeholder;
        selfEl.id = id;

        selfEl.addEventListener("click", (e) => {
            this.changeDoctor(e); //TODO потом переписать с проверкой это select/input or textarea
        });
        labelEl.htmlFor = `${id}`;
        labelEl.innerText = labelText;

        component.className = containerClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить

        labelEl.style.display = "block";   //TODO для теста. Потом эту строку удалить

        component.append(labelEl, selfEl );
        parent.append(component);
    }

    changeDoctor({target}){
        if (  !doctorSelect.options.some(el=> el.value === target.value)  ) return;
        else { //удаляем форму ТОЛЬКО если событие вызвано select-doctor (внутренние элементы формы так же вызовут эту функцию)
        const form = document.getElementById('visit-form');
        form.remove();

        switch (target.value) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(document.querySelector(globContainerID), cfig.cardiologistCfg);
                visitCardiologist.render();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                form.name = doctorSelect.options[0].value;
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(document.querySelector(globContainerID), cfig.dentistCfg);
                visitDentist.render();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                form.name = doctorSelect.options[1].value;
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(document.querySelector(globContainerID), cfig.therapistCfg);
                visitTherapist.render();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                form.name = doctorSelect.options[2].value;
                break;
            default:
    }}

    }


    // getSelected() {
    //     const {selfEl} = this._DOMelements;
    //     const a = selfEl.options[selfEl.selectedIndex].value;
    //     const b = selfEl.selectedIndex;
    //     const text = selfEl.text;
    //     const value = selfEl.value;
    //     return [a, b, text, value];
    //}

}
