// import {configVisitSelect as configObj} from "../componentsDeclaration/configSelect.js";

export default class InFieldsComponent {

    constructor(parent, {id, tag, containerClass, elementClass, labelText, options} ) {
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
        const {parent, selfEl, labelEl, component} = this._DOMelements;
        const { id, tag, containerClass, elementClass, labelText, options } = this;
        if (tag === 'select') {
            for (let i=0; i < options.length; i++) {
                selfEl.add( new Option(options[i].text, options[i].value, options[i].defaultSelected, options[i].defaultSelected) );
                /* в предыдущ стр. мы указали выбрать Терапевта по умолчанию (true, true).  Альтернативные способы:
                selectDoctorEl.innerText = "запись к Кардиологу";    selectDoctorEl.value = "Терапевт";   selectDoctorEl.selectedIndex = 2;  */
                selfEl.size = options.length; // TODO  пока что раскрыли select полностью
        }   }

        selfEl.className = elementClass;
        selfEl.id = id;

        selfEl.addEventListener("change", () => {

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

    getSelected() {
        const {selfEl} = this._DOMelements;
        const a = selfEl.options[selfEl.selectedIndex].value;
        const b = selfEl.selectedIndex;
        const text = selfEl.text;
        const value = selfEl.value;
        return [a, b, text, value];
    }

    remove() {
        const {component} = this._DOMelements;
        component.remove();
    }

    hide() {
        const {component} = this._DOMelements;
        component.style.opacity = "0";
    }

    show() {
        const {component} = this._DOMelements;
        component.style.opacity = "1";
    }
}
