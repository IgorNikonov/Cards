import {CreateBtn} from "./createBtn.js";
import {deleteCardBtnCfg, editCardBtnCfg, showMoreCardBtnCfg} from "../componentsDeclaration/configElements.js";

export default class WrapCardHTML { // сюда получили объект из res сервера, содержащий id
    constructor(parent, {id, doctor, lastName, mainName, partName, visitPurpose, visitDescription,
                    visitUrgency, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate }){
        this.id = id;
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
        const {id, doctor, lastName, mainName, partName, visitPurpose, visitDescription,
            visitUrgency, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate } =this;
        const {parent, cardEl, doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, hadDeseasesEl, bodyWeightIndexEl, visitorAgeEl, lastVisitDateEl } = this.DOMelements;

        cardEl.name                     =       id;
        doctorEl.innerText              = `Врач:            ${doctor}`;
        lastNameEl.innerText            = `Фамилия:         ${lastName}`;
        mainNameEl.innerText            = `Имя:             ${mainName}`;
        partNameEl.innerText            = `Отчество:        ${partName}`;
        visitPurposeEl.innerText        = `Цель:            ${visitPurpose}`;
        visitDescriptionEl.innerText    = `Описание:        ${visitDescription}`;
        visitUrgencyEl.innerText        = `Срочность:             ${visitUrgency}`;
        hadDeseasesEl.innerText         = `Перенесеные болезни:   ${hadDeseases}`;
        bodyWeightIndexEl.innerText     = `Индекс массы тела:     ${bodyWeightIndex}`;
        visitorAgeEl.innerText          = `Возраст:               ${visitorAge}`;
        lastVisitDateEl.innerText       = `День последнего визита:${lastVisitDate}`;

        doctorEl.className              = "card-item";
        lastNameEl.className            = "card-item";
        mainNameEl.className            = "card-item";
        partNameEl.className            = "card-item";
        visitPurposeEl.className        = "card-item --hidden";
        visitDescriptionEl.className    = "card-item --hidden";
        visitUrgencyEl.className        = "card-item --hidden";
        hadDeseasesEl.className         = "card-item --hidden";
        bodyWeightIndexEl.className     = "card-item --hidden";
        visitorAgeEl.className          = "card-item --hidden";
        lastVisitDateEl.className       = "card-item --hidden";
        cardEl.className = "desk-card";

        cardEl.append(doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, /*hadDeseasesEl, bodyWeightIndexEl,*/ visitorAgeEl);
        parent.append(cardEl);
        // сюда перенести блок кнопок (см.выше), если хочу их видеть под карточкой.
        const showMoreBtn = new CreateBtn(cardEl, showMoreCardBtnCfg).render();
        const editBtn = new CreateBtn(cardEl, editCardBtnCfg).render();
        const deleteBtn = new CreateBtn(cardEl, deleteCardBtnCfg).render();
        // назначаем id всем только что созданным кнопкам:
        const showMoreBtnDOM = document.querySelectorAll('div[data-name = id] button');
        showMoreBtnDOM.forEach(btn=> btn.name = id);
    }

    /*** ФУНКЦИИ, назначаемые обработчикам КНОПОК каждой КАРТОЧКИ ***/
    static showMoreCardItems(){

        const cardItems = document.querySelectorAll(".card-item.--hidden");
        cardItems.forEach(item=> item.classList.remove("--hidden") );
    };
    static editCard(){

    };
    static deleteCard(){

    };




}