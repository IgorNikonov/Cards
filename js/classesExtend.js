import {globContainer} from "./script.js";
import InFieldsComponent from "./InFieldsComponent.js";
import Form from "./form.js";
import * as cfg from "../componentsDeclaration/configInFieldComp.js";

export class CreateBtn {
    constructor(parent, {id, className, innerText, handler}){
        this.id = id;
        this.className = className;
        this.innerText = innerText;
        this.btnEl = document.createElement('button');
        this.handler = handler;
    }
    // static showVisitForm(){
    //         const visitForm = new VisitForm(globContainer, visitFormCfg);
    //         visitForm.render();
    //         document.getElementById('create-visit-btn').remove(); //и сразу себя же и у
    // }

    render(){
        const {id, className, innerText, btnEl} = this;
        btnEl.id = id;
        btnEl.className = className;
        btnEl.innerText = innerText;
        switch (this.innerText) {
            case "Создать визит":
                btnEl.addEventListener('click', ()=> this.handler() /*CreateBtn.showVisitForm()*/ );
                globContainer.append(btnEl);
                break;
            case "Закрыть":
                btnEl.addEventListener('click', ()=> this.handler() );
                globContainer.append(btnEl);
                break;
            case "Создать":
                btnEl.addEventListener('click', ()=> this.handler() );
                globContainer.append(btnEl);
                break;
            default:
        }


    }
}




export class VisitCardiologist extends Form {
// export class VisitCardiologist extends VisitForm {
    constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitCardiologist";
    }
    render(){
        super.render();
        const {component} = this._DOMelements;
        const visitorRegularPressure = new InFieldsComponent(component, cfg.visitorRegularPressure);
        visitorRegularPressure.render();

        const visitorBodyWeightIndex = new InFieldsComponent(component, cfg.visitorBodyWeightIndex);
        visitorBodyWeightIndex.render();

        const DeseasesVisitorHasHad = new InFieldsComponent(component, cfg.DeseasesVisitorHasHad);
        DeseasesVisitorHasHad.render();

        const visitorAge = new InFieldsComponent(component, cfg.visitorAge);
        visitorAge.render();

    }
}


export class VisitDentist extends Form {
    constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitDentist";
    }
    render(){
        super.render();
        const {component} = this._DOMelements;

        const lastVisitDate = new InFieldsComponent(component, cfg.lastVisitDate);
        lastVisitDate.render();
    }
}

export class VisitTherapist extends Form {
    constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitTherapist";
    }
    render(){
        super.render();
        const {component} = this._DOMelements;

        const visitorAge = new InFieldsComponent(component, cfg.visitorAge);
        visitorAge.render();

    }
}