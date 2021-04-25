import {globContainer} from "../js/script.js";
import VisitForm from "../js/visitForm.js";
import Form from "../js/Form.js";
import {visitFormCfg} from "./configForms.js";
import * as cfig from "./configForms.js";
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

export const returnBtnCfg = {
    id: "return-btn",
    tag: "button",
    type: "button",
    className: "visit__return-btn  btn",
    innerText:"К предыдущему меню",
    handler: function(){
      Form.showPreviousMenu();
    }

};


//кнопка "Создать карточку посещения"
export const createCardBtnCfg = {
    id: "create-btn",
    tag: "button",
    type: "button",  //TODO потом сменить на "submit"
    className: "visit__create-btn  btn",
    innerText:"Создать карточку посетителя",
    handler: function cardCreateHandler(){
        console.log("ура!")
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
    labelText:"Цель визита:",
};

// краткое описание визита:
export const visitDescription = {
    id: "description",
    tag: "textarea",
    containerClass: "visit__container",
    elementClass: "visit__description",
    labelText:"Опишите цель визита:",
};

// конфигурируем select -срочность визита:   обычная, приоритетная, неотложная
export const urgency = {
    id: "urgency",
    tag: "select",
    containerClass: "visit__container",
    elementClass: "visit__urgency-select",
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


// конфигурируем Имя
export const visitorName = {
    id: "visitor-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__name",
    labelText:"введите Имя:",
};

// конфигурируем Фамилию
export const visitorLastName = {
    id: "visitor-last-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-name",
    labelText:"введите Фамилию:",
};


// конфигурация уникальных полей для заполнения к каждому из докторов

export const visitorRegularPressure = {
    id: "visitor-normal-pressure",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__normal-pressure",
    labelText:"Обычное давление посетителя:",
};
export const visitorBodyWeightIndex = {
    id: "visitor-BWI",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__visitor-BWI",
    labelText:"Введите индекс массы тела:",
};
export const DeseasesVisitorHasHad = {
    id: "visitor-deseases",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__deseases",
    labelText:"Перечислить перенесенные болезни:",
};
export const visitorAge = {
    id: "visitor-age",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__visitor-age",
    labelText:"введите возраст посетителя:",
};

// для Стоматолога:
export const lastVisitDate = {
    id: "last-visit-date",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-visit-date",
    labelText:"введите дату последнего посещения:",
};