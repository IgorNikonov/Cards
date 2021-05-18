import changeDoctor from "./changeDoctor.js";
export default class InFieldsComponent {

    constructor(parent, {id, tag, containerClass, elementClass, elementType, elementName, labelText, placeholder, options} ) {
        this.ES6classTitle = InFieldsComponent;
        this.id = id;
        this.tag = tag;
        this.containerClass = containerClass;
        this.elementClass = elementClass;
        elementType && (this.elementType = elementType);
        elementName && (this.elementName = elementName);
        placeholder && (this.placeholder = placeholder);
        labelText   && (this.labelText     = labelText);
        options     && (this.options = options);
        // if (elementType) this.elementType = elementType;
        // if (elementName) this.elementName = elementName;
        // if (placeholder) this.placeholder = placeholder;
        // if (labelText) this.labelText = labelText;
        // if (options) this.options = options;
        this._DOMelements = {
            parent: parent,
            component: document.createElement('p'),
            selfEl: document.createElement(`${tag}`),
            labelEl: document.createElement("label"),
    }
    }
    render() {
        const {parent, selfEl, labelEl, component} = this._DOMelements;
        const { id, tag, containerClass, elementClass, labelText, options } = this;
        if (tag === 'select') {
            for (let i=0; i < options.length; i++) {
                selfEl.add( new Option(options[i].text, options[i].value, options[i].defaultSelected, options[i].defaultSelected) );
                selfEl.size = options.length; // TODO  пока что раскрыли select полностью
        }   }

        selfEl.className = elementClass;
        if (this.elementName) selfEl.name = this.elementName;
        if (this.elementType) selfEl.type = this.elementType;
        if (this.placeholder) selfEl.placeholder = this.placeholder;
        selfEl.id = id;
        if (this.id === "select-doctor"){
            selfEl.addEventListener("click", (e) => {
    //вызываем функцию вывода пустых формы для заполнения
                changeDoctor(e, null, null); //если бы передали сюда второй и третий параметр-
      // система перешла бы в режим редактирования карточки с номером в id
            });
        }

        labelEl.htmlFor = `${id}`;
        labelEl.innerText = labelText;

        component.className = containerClass;
        component.style.display = "block";

        labelEl.style.display = "block";

        component.append(labelEl, selfEl );
        parent.append(component);
    }
}
