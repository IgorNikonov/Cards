import InFieldsComponent from "./InFieldsComponent.js";
import Form from "./form.js";
import * as cfg from "../componentsDeclaration/configElements.js";


/*** КЛАССЫ - НАСЛЕДНИКИ формы FORM***/
export class VisitCardiologist extends Form {
    constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitCardiologist";
    }
    render(){
        super.render();
        const {component} = this._DOMelements;
        const visitorRegularPressure = new InFieldsComponent(component, cfg.visitorPressure);
        visitorRegularPressure.render();

        const visitorBodyWeightIndex = new InFieldsComponent(component, cfg.bodyWeightIndex);
        visitorBodyWeightIndex.render();

        const DeseasesVisitorHasHad = new InFieldsComponent(component, cfg.hadDeseases);
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