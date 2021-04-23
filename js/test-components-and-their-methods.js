import * as cfg from "../componentsDeclaration/configInFieldComp.js";
import InFieldsComponent from "./InFieldsComponent.js";
// import {configVisitSelect, configVisitPurpose, configVisitDescription, configUrgencySelect, configVisitorName, configVisitorLastName} from "../componentsDeclaration/configSelectInputTextArea.js";


export default function allComponentsTest () {

    const container = document.querySelector('.container');


    const selectDoctor = new InFieldsComponent(container, cfg.doctorSelect);
    selectDoctor.render();

    const purpose = new InFieldsComponent(container, cfg.visitPurpose);
    purpose.render();

    const description = new InFieldsComponent(container, cfg.visitDescription);
    description.render();

    const urgency = new InFieldsComponent(container, cfg.urgency);
    urgency.render();

    const visitorName = new InFieldsComponent(container, cfg.visitorName);
    visitorName.render();

    const visitorLastName = new InFieldsComponent(container, cfg.visitorLastName);
    visitorLastName.render();

    const visitorRegularPressure = new InFieldsComponent(container, cfg.visitorRegularPressure);
    visitorRegularPressure.render();

    const visitorBodyWeightIndex = new InFieldsComponent(container, cfg.visitorBodyWeightIndex);
    visitorBodyWeightIndex.render();

    const DeseasesVisitorHasHad = new InFieldsComponent(container, cfg.DeseasesVisitorHasHad);
    DeseasesVisitorHasHad.render();

    const visitorAge = new InFieldsComponent(container, cfg.visitorAge);
    visitorAge.render();

    const lastVisitDate = new InFieldsComponent(container, cfg.lastVisitDate);
    lastVisitDate.render();

    /*** Блок проверки работоспособности методов класса формирования компонентов ***/
console.log( selectDoctor.getSelected() );
// selectDoctor.remove();
// selectDoctor.hide();
// selectDoctor.show();
}