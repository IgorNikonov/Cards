import {CreateBtn} from "./createBtn.js";
import {deleteCardBtnCfg, editCardBtnCfg, showMoreCardBtnCfg} from "../componentsDeclaration/configElements.js";
import Server from "./server.js";
import Desk from "./desk.js";
import changeDoctor from "./changeDoctor.js"
import {DOM_elements} from "../componentsDeclaration/configVisProp.js"

export default class WrapCardHTML { // сюда получили объект из res сервера, содержащий id
    // в constructor прилетают: (parent, {id, doctor, lastName, mainName, patrName, purpose, description,
    //                 urgency, pressure, hadDeseases, bodyWeightIndex, age, lastVisitDate
         constructor(parent, ...args)//соберем все (кроме parent) по ...rest в массив из одного эл-та массива args[0]
    {
        Object.keys(args[0]).forEach( key=> {  this[`${key}`] = args[0][key] });
        /*строкой 12 мы заменили весь хардкорд из строк  14-27 ниже:  */
        //
        // this.id = id;
        // this.doctor = doctor;
        // this.lastName = lastName;
        // this.mainName = mainName;
        // this.patrName = patrName;
        // this.purpose = purpose;
        // this.description = description;
        // this.urgency = urgency;
        // this.pressure = pressure;
        // this.hadDeseases = hadDeseases;
        // this.bodyWeightIndex = bodyWeightIndex;
        // this.age = age;
        // this.lastVisitDate = lastVisitDate;
        this.DOMelements = {
            parent        : parent,
            cardEl    : document.createElement("div") };

            Object.keys(DOM_elements).forEach(key=> {
                this.DOMelements[key] = document.createElement(DOM_elements[key][2]);
            });

        /*перебором стр.33-35 заменил весь кардкод в строках 37-48 ниже: */
        // doctorEl          : document.createElement('p'),
        // lastNameEl        : document.createElement('p'),
        // mainNameEl        : document.createElement('p'),
        // patrNameEl        : document.createElement('p'),
        // purposeEl    : document.createElement('p'),
        // descriptionEl: document.createElement('p'),
        // urgencyEl    : document.createElement('p'),
        // pressureEl   : document.createElement('p'),
        // hadDeseasesEl     : document.createElement('p'),
        // bodyWeightIndexEl : document.createElement('p'),
        // ageEl      : document.createElement('p'),
        // lastVisitDateEl   : document.createElement('p'),
    }

    render(){
        const {id/*, doctor, lastName, mainName, pressure, patrName, purpose, description,
            urgency, hadDeseases, bodyWeightIndex, age, lastVisitDate*/ } =this;

        const {parent, cardEl/*, doctorEl, lastNameEl, mainNameEl, patrNameEl, purposeEl, descriptionEl,
            urgencyEl, hadDeseasesEl, pressureEl, bodyWeightIndexEl, ageEl, lastVisitDateEl */} = this.DOMelements;

        cardEl.dataset.name = id;
        let counter = 0;
        Object.keys(DOM_elements).forEach(key=> {
            if (this[`${key}`.slice(0, -2)]) {
                this.DOMelements[key].innerText = DOM_elements[key][0] +"   " + this[`${key}`.slice(0, -2)];
                this.DOMelements[key].className =  ( counter < 4 )?  "card-item" : "card-item --hidden";
                counter++;
            }
        });
/*строками 59-65  заметил хардкор в строках:  69 -92 ниже:  */
        // doctorEl.innerText              = `Врач:            ${doctor}`;
        // lastNameEl.innerText            = `Фамилия:         ${lastName}`;
        // mainNameEl.innerText            = `Имя:             ${mainName}`;
        // patrNameEl.innerText            = `Отчество:        ${patrName}`;
        // if (purpose)       purposeEl.innerText        = `Цель:                   ${purpose}`;
        // if (description)   descriptionEl.innerText    = `Описание:               ${description}`;
        // if (urgency)       urgencyEl.innerText        = `Срочность:              ${urgency}`;
        // if (pressure)    pressureEl.innerText     = `Нормальное давление:    ${pressure}`;
        // if (hadDeseases)        hadDeseasesEl.innerText         = `Перенесеные болезни:    ${hadDeseases}`;
        // if (bodyWeightIndex)    bodyWeightIndexEl.innerText     = `Индекс массы тела:      ${bodyWeightIndex}`;
        // if (age)         ageEl.innerText          = `Возраст:                ${age}`;
        // if (lastVisitDate)      lastVisitDateEl.innerText       = `День последнего визита: ${lastVisitDate}`;
        // doctorEl.className              = "card-item";
        // lastNameEl.className            = "card-item";
        // mainNameEl.className            = "card-item";
        // patrNameEl.className            = "card-item";
        // purposeEl.className        = "card-item --hidden";
        // descriptionEl.className    = "card-item --hidden";
        // urgencyEl.className        = "card-item --hidden";
        // pressureEl.className     = "card-item --hidden";
        // hadDeseasesEl.className         = "card-item --hidden";
        // bodyWeightIndexEl.className     = "card-item --hidden";
        // ageEl.className          = "card-item --hidden";
        // lastVisitDateEl.className       = "card-item --hidden";

        cardEl.className = "desk-card";

        // очень крутая фича:  в строках  75 - 84 я готовлю массив под parent.append(массив) только элементы,
        // у которых существует поле .innerText:
        const wantedElements = [];
        for (let key in this.DOMelements) {
            if(this.DOMelements.hasOwnProperty(key) && this.DOMelements[key] !== parent)
            {
                if (this.DOMelements[key].innerText) {
                    wantedElements.push(this.DOMelements[key])
                }
            }
        }
// и, спредом, вывожу этот подготовленный массив в рендер:
        cardEl.append(...wantedElements);
        //Это заменило мне последующий тупой вывод прямо ВСЕХ (даже несуществующих) значений элементов:
        // cardEl.append(doctorEl, lastNameEl, mainNameEl, patrNameEl, purposeEl, descriptionEl,
        //     urgencyEl, hadDeseasesEl, pressureEl, bodyWeightIndexEl, ageEl);


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