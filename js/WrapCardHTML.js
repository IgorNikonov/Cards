import {CreateBtn} from "./createBtn.js";
import {deleteCardBtnCfg, editCardBtnCfg, showMoreCardBtnCfg} from "../componentsDeclaration/configElements.js";
import Server from "./server.js";
import Desk from "../LizaModal/desk.js";
import changeDoctor from "./changeDoctor.js";

export default class WrapCardHTML { // сюда получили объект из res сервера, содержащий id
    constructor(parent, {id, doctor, lastName, mainName, partName, visitPurpose, visitDescription,
                    visitUrgency, visitorPressure, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate }){
        this.id = id;
        this.doctor = doctor;
        this.lastName = lastName;
        this.mainName = mainName;
        this.partName = partName;
        this.visitPurpose = visitPurpose;
        this.visitDescription = visitDescription;
        this.visitUrgency = visitUrgency;
        this.visitorPressure = visitorPressure;
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
        visitorPressureEl   : document.createElement('p'),
        hadDeseasesEl     : document.createElement('p'),
        bodyWeightIndexEl : document.createElement('p'),
        visitorAgeEl      : document.createElement('p'),
        lastVisitDateEl   : document.createElement('p'),
        cardEl    : document.createElement("div")
    }
    }
    render(){
        const {id, doctor, lastName, mainName, visitorPressure, partName, visitPurpose, visitDescription,
            visitUrgency, hadDeseases, bodyWeightIndex, visitorAge, lastVisitDate } =this;
        const {parent, cardEl, doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, hadDeseasesEl, visitorPressureEl, bodyWeightIndexEl, visitorAgeEl, lastVisitDateEl } = this.DOMelements;

        cardEl.dataset.name = id;
        doctorEl.innerText              = `Врач:            ${doctor}`;
        lastNameEl.innerText            = `Фамилия:         ${lastName}`;
        mainNameEl.innerText            = `Имя:             ${mainName}`;
        partNameEl.innerText            = `Отчество:        ${partName}`;
        visitPurposeEl.innerText        = `Цель:            ${visitPurpose}`;
        visitDescriptionEl.innerText    = `Описание:        ${visitDescription}`;
        visitUrgencyEl.innerText        = `Срочность:             ${visitUrgency}`;
        visitorPressureEl.innerText     = `Нормальное давление: ${visitorPressure}`;
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
        visitorPressureEl.className     = "card-item --hidden";
        hadDeseasesEl.className         = "card-item --hidden";
        bodyWeightIndexEl.className     = "card-item --hidden";
        visitorAgeEl.className          = "card-item --hidden";
        lastVisitDateEl.className       = "card-item --hidden";
        cardEl.className = "desk-card";

        cardEl.append(doctorEl, lastNameEl, mainNameEl, partNameEl, visitPurposeEl, visitDescriptionEl,
            visitUrgencyEl, hadDeseasesEl, visitorPressureEl, bodyWeightIndexEl, visitorAgeEl);
        parent.append(cardEl);
        // сюда перенести блок кнопок (см.выше), если хочу их видеть под карточкой.
        const showMoreBtn = new CreateBtn(cardEl, showMoreCardBtnCfg).render();
        const editBtn = new CreateBtn(cardEl, editCardBtnCfg).render();
        const deleteBtn = new CreateBtn(cardEl, deleteCardBtnCfg).render();

        // следующие 2стр кода: назначаем id всем только что созданным кнопкам:
        const showMoreBtnDOM = document.querySelectorAll(`div[data-name = "${id}"] button`);
        //ниже сработает код с:  `${id}` );
        showMoreBtnDOM.forEach(btn=> btn.dataset.name = `${id}`);
        //так же, как и сработал бы код с: id  =>  showMoreBtnDOM.forEach(btn=> btn.dataset.name = id);
    }

    /*** ФУНКЦИИ, назначаемые обработчикам КНОПОК каждой КАРТОЧКИ ***/
    static showMoreCardItems(e){
        const currentID = e.target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        const cardItems = document.querySelectorAll(`div[data-name = "${currentID}" ] .--hidden`); //получил все скрытые элементы внутри карточки с данным id
        cardItems.forEach(item=> item.classList.remove("--hidden"));
    };

    static async deleteCard(e, id){//либо пришел e от кнопки "удалить карту" либо пришел id от процедуры изменения карточки fillFormFromCard
        let currentID;
        if (e) currentID = e.target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        else
            currentID = id;
        await Server.deleteCard(currentID, Server.token);
        document.getElementById('card-container').innerHTML = ''; //удаляет все карточки из desk
        await Desk.refreshDesk();  //обновляет всекарточки на столе  из БД
    };


     static async editCard({target}){ //получили id карточки
        const currentID = target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        let card = await Server.getOneCard(currentID, Server.token); //получили с сервера редактируемую карточку
        changeDoctor(target, currentID, card.doctor); //отослали редактируемуюу карточку на изменение в вызове формы
    };


}