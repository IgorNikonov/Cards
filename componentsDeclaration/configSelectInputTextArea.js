export const configVisitSelect = {
    id: "select-doctor",
    tag: "select",
    containerClass: "visit__select-container",
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
            defaultSelected: true,
        },
    ],

};


export const configVisitInput = {
    id: "input-doctor",
    tag: "input",
    containerClass: "visit__input-container",
    elementClass: "visit__input",
    labelText:"Введите свой возраст",
};

export const configVisitTextArea = {
    id: "text-area-doctor",
    tag: "textarea",
    containerClass: "visit__text-area-container",
    elementClass: "visit__text-area",
    labelText:"Кратко опишите цель визита",
};
