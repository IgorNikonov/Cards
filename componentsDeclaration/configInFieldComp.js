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

// для Кардиолога:
/*
обычное давление
индекс массы тела
перенесенные заболевания сердечно-сосудистой системы
возраст
*/
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

// // кнопка "Закрыть"
// export const closeBtn = {
//     id: "close-btn",
//     tag: "button",
//     elementClass: "visit__close-btn",
//     labelText:"Закрыть",
// };
//
// //кнопка "Создать"
// export const createBtn = {
//     id: "create-btn",
//     tag: "button",
//     elementClass: "visit__create-btn",
//     labelText:"Создать",
// };
