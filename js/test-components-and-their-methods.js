import * as cfg from "../componentsDeclaration/configInFieldComp.js";
import InFieldsComponent from "./InFieldsComponent.js";
// import {configVisitSelect, configVisitPurpose, configVisitDescription, configUrgencySelect, configVisitorName, configVisitorLastName} from "../componentsDeclaration/configSelectInputTextArea.js";
import VisitForm from "./visitForm.js";

import * as cfig from "../componentsDeclaration/configForms.js"

export default function allComponentsTest () {

    const container = document.querySelector('.container');



    const visitForm = new VisitForm(container, cfig.visitForm);
    visitForm.render();

}