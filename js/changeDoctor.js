import {doctorSelect} from "../componentsDeclaration/configElements.js";
import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";
import {deskComp} from "../LizaModal/main.js";

export default function changeDoctor({target}){
    if (  !doctorSelect.options.some(el=> el.value === target.value)  ) return; //TODO потом проверить надобность этой проверки и удалить , если больше не надо
    else {
        if ( document.getElementById("visit-form")) document.getElementById("visit-form").remove();
        const visitFormParent = document.getElementById("select-form");
        switch (target.value) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(visitFormParent, cfig.cardiologistCfg);
                visitCardiologist.renderHeader();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                visitCardiologist.render();
                VisitForm.showButtons(visitCardiologist._DOMelements.component);
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(visitFormParent, cfig.dentistCfg);
                visitDentist.renderHeader();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                visitDentist.render();
                VisitForm.showButtons(visitDentist._DOMelements.component);
                // form.name = doctorSelect.options[1].value;
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(visitFormParent, cfig.therapistCfg);
                visitTherapist.renderHeader();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                visitTherapist.render();
                VisitForm.showButtons(visitTherapist._DOMelements.component);
                // form.name = doctorSelect.options[2].value;
                break;
            default:
        }}
}
