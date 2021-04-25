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
        this.parent = parent;
    }
    render(){
        const {id, className, innerText, btnEl, parent} = this;
        btnEl.id = id;
        btnEl.className = className;
        btnEl.innerText = innerText;
        btnEl.addEventListener('click', ()=> this.handler() );
        parent.append(btnEl);
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