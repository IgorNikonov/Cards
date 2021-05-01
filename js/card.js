import {doctorSelect} from "../componentsDeclaration/configElements.js";

export class CardHandler {

    constructor() {
// внимание: это полученный объект из visitForm, в нем НЕТ еще id карточки!
// id карточки будет позднее возвращёт с сервера в response
        let doctorEl = document.getElementById("visit-form");

            this.lastName = document.getElementsByName("visitorLastName")[0].value || "";
            this.mainName = document.getElementsByName("visitorName")[0].value || "";
            this.partName = document.getElementsByName("visitorPatrName")[0].value || "";

            this.visitPurpose = document.getElementsByName("purpose")[0].value || "";
            this.visitDescription = document.getElementsByName("description")[0].value || "";
            this.visitUrgency = document.getElementsByName("urgency")[0].value || "";

        if (document.getElementsByName("hadDeseases")[0])
            this.hadDeseases = document.getElementsByName("hadDeseases")[0].value || "";

 if (document.getElementsByName("bodyWeightIndex")[0])
            this.bodyWeightIndex = document.getElementsByName("bodyWeightIndex")[0].value || "";

        if (document.getElementsByName("age")[0])
            this.visitorAge = document.getElementsByName("age")[0].value || "";

        if (doctorEl.name === "form-cardiologist")
            this.doctor = doctorSelect.options[0].value; //TODO потом переписать этот костыль на:
        else
        if (doctorEl.name === "form-dentist") {
            this.lastVisitDate = document.getElementsByName("lastVisitDate")[0].value || "";
            this.doctor = doctorSelect.options[1].value || "";
        } else
        if (doctorEl.name === "form-therapist")
            this.doctor = doctorSelect.options[2].value || "";
        this.visitStatus =  ( Math.random() > 0.5 ) ? "актуален" : "закрыт";
    }

    correctUndefinds(){ // этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
        //лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";
        for (let key in this) if (this.key === undefined) this.key = "";
    }


}
