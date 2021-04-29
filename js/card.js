import {doctorSelect} from "../componentsDeclaration/configElements.js";
import Server from "./server.js"

export class CardHandler {

    constructor() {

        this.doctorEl = document.getElementById("visit-form");

            this.lastName = document.getElementsByName("visitorLastName")[0].value || "";
            this.mainName = document.getElementsByName("visitorName")[0].value || "";
            this.patrName = document.getElementsByName("visitorPatrName")[0].value || "";

            this.visitPurpose = document.getElementsByName("purpose")[0].value || "";
            this.visitDescription = document.getElementsByName("description")[0].value || "";
            this.visitUrgency = document.getElementsByName("urgency")[0].value || "";

        if (document.getElementsByName("hadDeseases")[0])
            this.hadDeseases = document.getElementsByName("hadDeseases")[0].value || "";

 if (document.getElementsByName("bodyWeightIndex")[0])
            this.bodyWeightIndex = document.getElementsByName("bodyWeightIndex")[0].value || "";

        if (document.getElementsByName("age")[0])
            this.visitorAge = document.getElementsByName("age")[0].value || "";

        if (this.doctorEl.name === "form-cardiologist")
            this.doctor = doctorSelect.options[0].value; //TODO потом переписать этот костыль на:
        else
        if (this.doctorEl.name === "form-dentist") {
            this.lastVisitDate = document.getElementsByName("lastVisitDate")[0].value || "";
            this.doctor = doctorSelect.options[1].value || "";
        } else
        if (this.doctorEl.name === "form-therapist")
            this.doctor = doctorSelect.options[2].value || "";
    }

    correctUndefinds(){ // этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
        //лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";
        for (let key in this) if (this.key === undefined) this.key = "";
    }

    async create() {
        const cardToAdd = await Server.createCard({
            lastName: this.lastName.toLowerCase(),
            mainName: this.mainName.toLowerCase(),
            patrName: this.patrName.toLowerCase(),
            visitPurpose: this.visitPurpose.toLowerCase(),
            visitDescription: this.visitDescription.toLowerCase(),
            visitUrgency: this.visitUrgency,
            hadDeseases: this.hadDeseases,
            bodyWeightIndex: this.bodyWeightIndex,
            visitorAge: this.visitorAge,
            lastVisitDate: this.lastVisitDate,
            doctor: this.doctor,
        }, Server.token);

        return cardToAdd;
    }
}
