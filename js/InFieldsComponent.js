import changeDoctor from "./changeDoctor.js";
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
        if (this.id === "select-doctor"){
            selfEl.addEventListener("click", (e) => {
                changeDoctor(e);
            });
        }

        labelEl.htmlFor = `${id}`;
        labelEl.innerText = labelText;

        component.className = containerClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить

        labelEl.style.display = "block";   //TODO для теста. Потом эту строку удалить

        component.append(labelEl, selfEl );
        parent.append(component);
    }
}
