//импорт классов
import Form from "./form.js"
import {CreateBtn} from "./classesExtend.js";
import InFieldsComponent from "./InFieldsComponent.js";
//импорт конфигураций:
import * as cfg from "../componentsDeclaration/configInFieldComp.js";
import * as cfig from "../componentsDeclaration/configForms.js";

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

     constructor(parent, {id, tag, componentClass, title} ) {
        super(parent, {id, tag, componentClass, title});
         this.ES6classTitle = "VisitForm";
     }

     static renderIdleForm(){ // общий метод рендеринга исходной формы  visitForm
         if (document.getElementById("form")) document.getElementById("form").remove();
         const visitForm = new VisitForm(document.querySelector(cfg.globContainerID), cfig.visitFormCfg);
         visitForm.render();
     }

    bodyCloseHandler({target}){
        const form_ = document.querySelector("form");
        if (target.closest('form')) {}
        else if (form_.id !== cfig.visitFormCfg.id){ // если это не основная форма выбора врача -то закрыть
            form_.remove();
            VisitForm.renderIdleForm(); // и вернуться к дефолтной форме выбора врача!
        }
    }

 //выполняем эту ф-цию сразу после выбора доктора
     static renderAdditionalFields(innerComponent){

      const purpose = new InFieldsComponent(innerComponent, cfg.visitPurpose);
      purpose.render();

      const description = new InFieldsComponent(innerComponent, cfg.visitDescription);
      description.render();

      const urgency = new InFieldsComponent(innerComponent, cfg.urgency);
      urgency.render();

      const visitorName = new InFieldsComponent(innerComponent, cfg.visitorName);
      visitorName.render();

      const visitorLastName = new InFieldsComponent(innerComponent, cfg.visitorLastName);
      visitorLastName.render();

        // создаём кнопки closeBtn, createBtn
      const closeBtn = new CreateBtn(innerComponent, cfg.closeBtnCfg);
      const createBtn = new CreateBtn(innerComponent, cfg.createBtn);
      closeBtn.render();
      createBtn.render();
     }

     render(){
        super.render();
        const {component} = this._DOMelements;

         const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
         selectDoctor.render();
         document.addEventListener("click", this.bodyCloseHandler);
     }

}
