
/***  Класс для формирования Формы Визитов  ***/
import Modal from "./modal.js"
import InFieldsComponent from "./InFieldsComponent.js";
import * as cfg from "../componentsDeclaration/configInFieldComp.js";
export default class VisitForm extends Modal {

    constructor(parent, {id, tag, componentClass}) {
        super(parent, {id, tag, componentClass});
     }

     render(){
        super.render();
        const {component} = this._DOMelements;

         const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
         selectDoctor.render();

         const purpose = new InFieldsComponent(component, cfg.visitPurpose);
         purpose.render();

         const description = new InFieldsComponent(component, cfg.visitDescription);
         description.render();

         const urgency = new InFieldsComponent(component, cfg.urgency);
         urgency.render();

         const visitorName = new InFieldsComponent(component, cfg.visitorName);
         visitorName.render();

         const visitorLastName = new InFieldsComponent(component, cfg.visitorLastName);
         visitorLastName.render();

         const visitorRegularPressure = new InFieldsComponent(component, cfg.visitorRegularPressure);
         visitorRegularPressure.render();

         const visitorBodyWeightIndex = new InFieldsComponent(component, cfg.visitorBodyWeightIndex);
         visitorBodyWeightIndex.render();

         const DeseasesVisitorHasHad = new InFieldsComponent(component, cfg.DeseasesVisitorHasHad);
         DeseasesVisitorHasHad.render();

         const visitorAge = new InFieldsComponent(component, cfg.visitorAge);
         visitorAge.render();

         const lastVisitDate = new InFieldsComponent(component, cfg.lastVisitDate);
         lastVisitDate.render();

     }

}
