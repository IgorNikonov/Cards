/*
Модальное окно "Создать визит"
должны присутствовать:
    Выпадающий список (select) с выбором врача. В зависимости от выбранного врача, под этим выпадающим списком будут появляться поля, которые нужно дозаполнить для визита к этому врачу.
    В выпадающем списке должно быть три опции - Кардиолог, Стоматолог, Терапевт.
    После выбора доктора из выпадающего списка, под ним должны появиться поля для записи к этому доктору. Несколько полей являются одинаковыми для всех трех докторов:
    цель визита
краткое описание визита
выпадающее поле - срочность (обычная, приоритетная, неотложная)
ФИО
*/
import Select from "./select.js"
import Input from "./input.js"

export default class Visit {

    constructor(parent) {
        this._DOMelements = {
            parent: parent,
            selfEl: document.createElement("div"),
            elemTitleEl: document.createElement("span"),
            // selectDoctorEl: document.createElement('select'),
            // purposeOfVisitEl: document.createElement('input'),
            // descriptionOfVisitEl: document.createElement('text-area'),
        }
    }

    render() {
        // const {} = this;
        const {parent, elemTitleEl, selfEl } = this._DOMelements;

        elemTitleEl.innerText = "visit card";

        selfEl.className = "visit";
        selfEl.classList.add("test");

//         selectDoctorEl.add( new Option("запись к Кардиологу", "Кардиолог") );
//         selectDoctorEl.add( new Option("запись к Стоматологу", "Стоматолог") );
//         selectDoctorEl.add( new Option("запись к Терапевту", "Терапевт", true, true) );
// /* в предыдущ стр. мы указали выбрать Терапевта по умолчанию (true, true).  Альтернативные способы:
// selectDoctorEl.innerText = "запись к Кардиологу";    selectDoctorEl.value = "Терапевт";   selectDoctorEl.selectedIndex = 2;  */
//         selectDoctorEl.size = 3;
//         selectDoctorEl.className = "visit__select-doctor";
//         selectDoctorEl.id = 'select-doctor';

        const select = new Select(selfEl);
        select.render();
        const input = new Input(selfEl);
        input.render();

        // purposeOfVisitEl.placeholder = "Опишите цель визита";
        // purposeOfVisitEl.className = "visit__purpose";
        //
        // descriptionOfVisitEl.className = "visit__description";


        selfEl.append(elemTitleEl);
        parent.append(selfEl);
    }

    // getSelectedDoctor() {
    //     const {selectDoctorEl} = this._DOMelements;
    //     const a = selectDoctorEl.options[selectDoctorEl.selectedIndex].value;
    //     const b = selectDoctorEl.selectedIndex;
    //     const text = selectDoctorEl.text;
    //     const value = selectDoctorEl.value;
    //     return [a, b, text, value];
    // }

    remove() {
        const {selfEl} = this._DOMelements;
        selfEl.remove();
    }
}
