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
export default class Visit {

    constructor(parent) {
        this._DOMelements = {
            parent: parent,
            selfEl: document.createElement("div"),
            selectDoctorEl: document.createElement('select'),
            purposeOfVisitEl: document.createElement('input'),
            descriptionOfVisitEl: document.createElement('text-area'),
        }
    }

    render() {
        // const {} = this;
        const {parent, selfEl, selectDoctorEl, purposeOfVisitEl, descriptionOfVisitEl} = this._DOMelements;
        debugger
        selectDoctorEl.innerText = "Выбери Врача:";
        selectDoctorEl.value = "Снова Выбери Врача:";
        // selectDoctorEl.options[0].text = "Кардиолог";
        // selectDoctorEl.options[1].value = "Стоматолог";
        // selectDoctorEl.options[2].value = "Терапевт";
        selectDoctorEl.size = 3;
        selectDoctorEl.className = "visit__select-doctor";

        purposeOfVisitEl.placeholder = "Опишите цель визита";
        purposeOfVisitEl.className = "visit__purpose";

        descriptionOfVisitEl.className = "visit__description";

        selectDoctorEl.addEventListener("change", () => {
            const show = this.getSelectedDoctor();
            console.log(show)
        });
        selfEl.append(selectDoctorEl);
        parent.append(selfEl);
    }

    getSelectedDoctor() {
        const {selectDoctorEl} = this._DOMelements;
        const a = selectDoctorEl.options[selectDoctorEl.selectedIndex].value;
        const b = selectDoctorEl.selectedIndex;
        return [a, b];
    }

    remove() {
        const {selfEl} = this._DOMelements;
        selfEl.remove();
    }
}
