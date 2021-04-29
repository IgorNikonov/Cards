export default class Form {
    constructor(parent, {id, name, tag, componentClass, title} ) {
        this.ES6classTitle = "Form";
        this.id = id;
        this.name = name;
        this.componentClass = componentClass;
        this.title = title;
        this._DOMelements = {
            parent: parent,
            component: document.createElement(`${tag}`),
            titleEl: document.createElement('h3'),
        }
    }
    render() {
        const {id, name, componentClass, title} = this;
        const {parent, component, titleEl} = this._DOMelements;

        component.className = componentClass;
        component.id = id;
        component.name = name;
        component.className = componentClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить
        titleEl.innerText = title;
        component.append(titleEl);
        parent.append(component);
    }
}