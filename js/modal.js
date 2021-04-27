/*
класс Modal (всплывающее окно);
класс Form (для всех форм);
отдельные классы (компоненты) для полей формы (input, select, textarea);
класс Visit (описывающий общие для всех визитов к любому врачу поля и методы);
дочерние классы VisitDentist, VisitCardiologist, VisitTherapist;
*/

export default class Modal {
    constructor(parent, {id, tag, componentClass, title} ) {
        this.id = id;
        this.tag = tag;
        this.componentClass = componentClass;
        this.title = title;
        this._DOMelements = {
            parent: parent,
            component: document.createElement(`${tag}`),
            titleEl: document.createElement('h3'),
        }
    }
    render() {
        const { id, tag, componentClass, title} = this;
        const {parent, component, titleEl} = this._DOMelements;

        component.className = componentClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить
        titleEl.innerText = title;
        component.append(title);
        parent.append(component);
    }
    remove(){
        const {component} = this._DOMelements;
        component.remove();
    }
}