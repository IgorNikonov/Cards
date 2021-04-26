import {globContainer} from "../js/script.js";
import VisitForm from "../js/visitForm.js";
import {Card, cardData} from "../js/card.js";
import {visitFormCfg} from "./configForms.js";
export const globContainerID = ".global-container";


//кнопка "reset   -очистка данных формы"
export const resetBtnCfg = {
    id: "reset-btn",
    tag: "button",
    type: "reset",
    className: "visit__reset-btn  btn",
    innerText:"очистить форму",
    handler: function formResetHandler(){}
};

//кнопка "Создать карточку посещения"
export const createCardBtnCfg = {
    id: "create-btn",
    tag: "button",
    type: "button",  //TODO потом сменить на "submit"
    className: "visit__create-btn  btn",
    innerText:"Создать карточку посетителя",
    handler: function cardCreateHandler(){
        console.log("ура, создаём карточку!");
        const card = new Card();

        console.log( card.getLastName() );

        // cardData[0] = card.lastName;
        // console.log(cardData[0]);
    }
};

// первая кнопка входа в систему
export const createVisitBtnCfg = {
    id: "create-visit-btn",
    tag: "button",
    type: "button",
    className: "create-visit-btn  btn",
    innerText: "Создать визит",
    handler: function showVisitForm(){
        if (document.getElementById("form")) document.getElementById("form").remove();
        const visitForm = new VisitForm(globContainer, visitFormCfg);
        visitForm.render();
        document.getElementById('create-visit-btn').remove(); //и сразу себя же и у
    }
};

// кнопка "Закрыть"
export const closeBtnCfg = {
    id: "close-btn",
    className: "visit__close-btn btn",
    innerText:"Закрыть",
    handler:  function cardCloseHandler(){document.querySelector("form").remove();
VisitForm.renderIdleForm();} // и вернуться к дефолтной форме выбора врача!
};


// конфигурируем select - Выбор специализации врача к посещению:  Терапевт, стоматолог, кардиолог
export const doctorSelect = {
        id: "select-doctor",
        tag: "select",
        containerClass: "visit__container",
        elementClass: "visit__select",
        elementName: "selectDoctor",
        labelText:"Выберите Врача",

        options: [
        {
            value: "Кардиолог",
            text: "запись к Кардиологу",
            defaultSelected: false,
        },
        {
            value: "Стоматолог",
            text: "запись к Стоматологу",
            defaultSelected: false,
        },
        {
            value: "Терапевт",
            text: "запись к Терапевту",
            defaultSelected: false,
        },
    ],

};

// цель визита:
export const visitPurpose = {
    id: "purpose",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__purpose",
    elementName: "purpose",
    placeholder: "цель:",
    elementType: "text",
    labelText:"Цель визита:",
};

// краткое описание визита:
export const visitDescription = {
    id: "description",
    tag: "textarea",
    containerClass: "visit__container",
    elementClass: "visit__description",
    elementName: "description",
    placeholder: "--текст описания--",
    labelText:"Опишите цель визита:",
};

// конфигурируем select -срочность визита:   обычная, приоритетная, неотложная
export const urgency = {
    id: "urgency",
    tag: "select",
    containerClass: "visit__container",
    elementClass: "visit__urgency-select",
    elementName: "urgency",
    labelText:"Задайте срочность посещения:",

    options: [
        {
            value: "Обычная",
            text: "Не срочное посещение",
            defaultSelected: false,
        },
        {
            value: "Приоритетная",
            text: "Требуется встреча в ближайшее время",
            defaultSelected: false,
        },
        {
            value: "Неотложная",
            text: "Требуется экстренная встреча",
            defaultSelected: true,
        },
    ],

};

// конфигурируем Фамилию
export const visitorLastName = {
    id: "visitor-last-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-name",
    elementName: "visitorLastName",
    placeholder: "фамилия",
    elementType: "text",
    labelText:"введите Фамилию:",
};

// конфигурируем Имя
export const visitorName = {
    id: "visitor-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__name",
    elementName: "visitorName",
    placeholder: "имя",
    elementType: "text",
    labelText:"введите Имя:",
};

// конфигурируем Отчество
export const visitorPatrName = {
    id: "visitor-patr-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__patr-name",
    elementName: "visitorPatrName",
    placeholder: "отчество",
    elementType: "text",
    labelText:"введите Отчество:",
};

// конфигурация уникальных полей для заполнения к каждому из докторов
export const visitorPressure = {
    id: "visitor-pressure",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__pressure",
    elementName: "visitorPressure",
    placeholder: "пример: 120х80",
    elementType: "text",
    labelText:"Обычное давление посетителя:",
};
export const bodyWeightIndex = {
    id: "weight-index",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__weight-index",
    elementName: "bodyWeightIndex",
    elementType: "number",
    labelText:"Введите индекс массы тела:",
};
export const hadDeseases = {
    id: "visitor-deseases",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__deseases",
    elementName: "hadDeseases",
    placeholder: "перенесённые болезни",
    elementType: "text",
    labelText:"Перечислить перенесенные болезни:",
};
export const visitorAge = {
    id: "visitor-age",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__visitor-age",
    elementName: "age",
    elementType: "number",
    labelText:"введите возраст посетителя:",
};

// для Стоматолога:
export const lastVisitDate = {
    id: "last-visit-date",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-visit-date",
    elementName: "lastVisitDate",
    placeholder: "формат: день.месяц.год",
    elementType: "date",
    labelText:"введите дату последнего посещения:",
};
