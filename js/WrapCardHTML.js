import {CreateBtn} from "./createBtn.js";
import {deleteCardBtnCfg, editCardBtnCfg, showMoreCardBtnCfg} from "../componentsDeclaration/configElements.js";

export default class WrapCardHTML {
    constructor(parent, {doctor, lastName, mainName, partName, visitPurpose, visitDescription,
                    visitUrgency, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate }){
        this.doctor = doctor;
        this.lastName = lastName;
        this.mainName = mainName;
        this.partName = partName;
        this.visitPurpose = visitPurpose;
        this.visitDescription = visitDescription;
        this.visitUrgency = visitUrgency;
        this.hadDeseases = hadDeseases;
        this.bodyWeightIndex = bodyWeightIndex;
        this.visitorAge = visitorAge;
        this.lastVisitDate = lastVisitDate;

        this.DOMelements = {
            parent        : parent,
        doctorEl          : document.createElement('p'),
        lastNameEl        : document.createElement('p'),
        mainNameEl        : document.createElement('p'),
        partNameEl        : document.createElement('p'),
        visitPurposeEl    : document.createElement('p'),
        visitDescriptionEl: document.createElement('p'),
        visitUrgencyEl    : document.createElement('p'),
        hadDeseasesEl     : document.createElement('p'),
        bodyWeightIndexEl : document.createElement('p'),
        visitorAgeEl      : document.createElement('p'),
        lastVisitDateEl   : document.createElement('p'),
        cardEl    : document.createElement("div")
    }
    }
    render(){
        const {doctor, lastName, mainName, partName, visitPurpose, visitDescription,
            visitUrgency, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate } =this;
        const {parent, cardEl, doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, hadDeseasesEl, bodyWeightIndexEl, visitorAgeEl, lastVisitDateEl } = this.DOMelements;

        doctorEl.innerText              = doctor;
        lastNameEl.innerText            = lastName;
        mainNameEl.innerText            = mainName;
        partNameEl.innerText            = partName;
        visitPurposeEl.innerText        = visitPurpose;
        visitDescriptionEl.innerText    = visitDescription;
        visitUrgencyEl.innerText        = visitUrgency;
        hadDeseasesEl.innerText         = hadDeseases;
        bodyWeightIndexEl.innerText     = bodyWeightIndex;
        visitorAgeEl.innerText          = visitorAge;
        lastVisitDateEl.innerText       = lastVisitDate;

        // doctorEl.innerText              =
        // lastNameEl.innerText            =
        // mainNameEl.innerText            =
        // partNameEl.innerText            =
        // visitPurposeEl.innerText        =
        // visitDescriptionEl.innerText    =
        // visitUrgencyEl.innerText        =
        // hadDeseasesEl.innerText         =
        // bodyWeightIndexEl.innerText     =
        // visitorAgeEl.innerText          =
        // lastVisitDateEl.innerText       =


        cardEl.className = "desk-card"; //TODO отдать этот класс Лизе на стилизацию
        const showMoreBtn = new CreateBtn(cardEl, showMoreCardBtnCfg).render();
        const editBtn = new CreateBtn(cardEl, editCardBtnCfg).render();
        const deleteBtn = new CreateBtn(cardEl, deleteCardBtnCfg).render();

        cardEl.append(doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, hadDeseasesEl, bodyWeightIndexEl, visitorAgeEl);
        parent.append(cardEl);
    }


}