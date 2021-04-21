/*
класс Modal (всплывающее окно);
класс Form (для всех форм);
отдельные классы (компоненты) для полей формы (input, select, textarea);
класс Visit (описывающий общие для всех визитов к любому врачу поля и методы);
дочерние классы VisitDentist, VisitCardiologist, VisitTherapist;
*/
export default class Modal {
    constructor(parent){
        this._DOMelements = {
            parent: parent,

        }
    }
}

export default class InitialModal {
    constructor(parent){
        this.email = "";
        this.password = "";
        this._DOMelements = {
            parent: parent,
            selfEl:    document.createElement("div"),
            emailEl: document.createElement('input'),
            passwordEl: document.createElement('input'),

        }
    }
    render(){
        const {email, password} = this;
        const {parent, selfEl, emailEl, passwordEl} = this._DOMelements;

        emailEl.value = email;
        emailEl.className = "email";
        passwordEl.value = password;
        passwordEl.className = "password";
        selfEl.className = "initial-modal";
        selfEl.append(emailEl, passwordEl);
        parent.append(self);
    }

    remove(){
        const {parent, selfEl} = this._DOMelements;
        selfEl.remove();
    }

}




export default class Form {
    constructor(parent){

    }
}


export default class VisitDentist extends Visit {
    constructor() {
        super();

    }
}

export default class VisitCardiologist extends Visit {
    constructor() {
        super();
    }
}

export default class VisitTherapist extends Visit {
    constructor() {
        super();
    }
}