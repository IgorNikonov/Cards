import VisitForm from "./visitForm.js";
import * as cfig from "../componentsDeclaration/configForms.js";

export const globContainer = ".global-container";
const visitForm = new VisitForm(document.querySelector(globContainer), cfig.visitForm);
visitForm.render();


