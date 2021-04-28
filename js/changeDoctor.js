import {doctorSelect} from "../componentsDeclaration/configElements.js";
import * as visits from "./classesExtend.js";
import * as cfig from "../componentsDeclaration/configForms.js";
import VisitForm from "./visitForm.js";
import {deskComp} from "../LizaModal/main.js";

export default function changeDoctor({target}){
    if (  !doctorSelect.options.some(el=> el.value === target.value)  ) return; //TODO потом проверить надобность этой проверки и удалить , если больше не надо
    else { //удаляем форму ТОЛЬКО если событие вызвано select-doctor (внутренние элементы формы так же вызовут эту функцию)
        document.getElementById('select-form').remove();

        switch (target.value) {

            case "Кардиолог":
                const visitCardiologist = new visits.VisitCardiologist(deskComp, cfig.cardiologistCfg);
                visitCardiologist.renderHeader();
                VisitForm.renderAdditionalFields(visitCardiologist._DOMelements.component);
                visitCardiologist.render();
                VisitForm.showButtons(visitCardiologist._DOMelements.component);
                // form.name = doctorSelect.options[0].value; //TODO потом переделать этот hardcore
                break;

            case "Стоматолог":
                const visitDentist = new visits.VisitDentist(deskComp, cfig.dentistCfg);
                visitDentist.renderHeader();
                VisitForm.renderAdditionalFields(visitDentist._DOMelements.component);
                visitDentist.render();
                VisitForm.showButtons(visitDentist._DOMelements.component);
                // form.name = doctorSelect.options[1].value;
                break;

            case "Терапевт":
                const visitTherapist = new visits.VisitTherapist(deskComp, cfig.therapistCfg);
                visitTherapist.renderHeader();
                VisitForm.renderAdditionalFields(visitTherapist._DOMelements.component);
                visitTherapist.render();
                VisitForm.showButtons(visitTherapist._DOMelements.component);
                // form.name = doctorSelect.options[2].value;
                break;
            default:
        }}
}
