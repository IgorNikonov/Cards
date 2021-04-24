//импорт родительских классов
import Form from "./form.js"
//импорт конфигураций:
import InFieldsComponent from "./InFieldsComponent.js";
import * as cfg from "../componentsDeclaration/configInFieldComp.js";

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

     constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
         this.className = "VisitForm";
     }

 //выполняем эту ф-цию сразу после выбора доктора
     renderAdditionalFields(){
         const {component} = this._DOMelements;
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
     }

     render(){
        super.render();
        const {component} = this._DOMelements;

         const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
         selectDoctor.render();
     }

}
