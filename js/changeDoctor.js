import {doctorSelect, globContainerID} from "../componentsDeclaration/configElements.js";
import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";

export default function changeDoctor({target}){
    if (  !doctorSelect.options.some(el=> el.value === target.value)  ) return;
    else { //удаляем форму ТОЛЬКО если событие вызвано select-doctor (внутренние элементы формы так же вызовут эту функцию)
        const form = document.getElementById('visit-form');
        form.remove();

        switch (target.value) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(document.querySelector(globContainerID), cfig.cardiologistCfg);
                visitCardiologist.renderHeader();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                visitCardiologist.render();
                VisitForm.showButtons(visitCardiologist._DOMelements.component);
                form.name = doctorSelect.options[0].value;
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(document.querySelector(globContainerID), cfig.dentistCfg);
                visitDentist.renderHeader();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                visitDentist.render();
                VisitForm.showButtons(visitDentist._DOMelements.component);
                form.name = doctorSelect.options[1].value;
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(document.querySelector(globContainerID), cfig.therapistCfg);
                visitTherapist.renderHeader();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                visitTherapist.render();
                VisitForm.showButtons(visitTherapist._DOMelements.component);
                form.name = doctorSelect.options[2].value;
                break;
            default:
        }}
}
