/*
класс Modal (всплывающее окно);
класс Form (для всех форм);
отдельные классы (компоненты) для полей формы (input, select, textarea);
класс Visit (описывающий общие для всех визитов к любому врачу поля и методы);
дочерние классы VisitDentist, VisitCardiologist, VisitTherapist;
*/

export default class Modal {
    constructor(parent, {id, tag, componentClass} ) {
        this.id = id;
        this.tag = tag;
        this.componentClass = componentClass;
        this._DOMelements = {
            parent: parent,
            component: document.createElement(`${tag}`),
        }
    }
    render() {
        const { id, tag, componentClass} = this;
        const {parent, component} = this._DOMelements;

        component.className = componentClass;
        component.classList.add("test"); //TODO для теста. Потом эту строку удалить
        component.style.display = "block"; //TODO для теста. Потом эту строку удалить
        parent.append(component);
    }
    remove(){
        const {component} = this._DOMelements;
        component.remove();
    }
    hide(){
        const {component} = this._DOMelements;
        component.style.opacity = "0";
    }
    show(){
        const {component} = this._DOMelements;
        component.style.opacity = "1";
    }

}