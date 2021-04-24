//импорт родительских классов
import InFieldsComponent from "./InFieldsComponent.js";
import Form from "./form.js";
import VisitForm from "./visitForm.js";
//импорт конфигураций:
import * as cfg from "../componentsDeclaration/configInFieldComp.js";

export class VisitCardiologist extends Form {
// export class VisitCardiologist extends VisitForm {
    constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
        this.className = "VisitCardiologist";
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
        this.className = "VisitDentist";
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
        this.className = "VisitTherapist";
    }
    render(){
        super.render();
        const {component} = this._DOMelements;

        const visitorAge = new InFieldsComponent(component, cfg.visitorAge);
        visitorAge.render();

    }
}