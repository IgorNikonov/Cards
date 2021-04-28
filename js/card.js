import {doctorSelect} from "../componentsDeclaration/configElements.js";
import Server from "./server.js";

const cards = [];
export {cards};

export class CardHandler {

    constructor() {

        this.doctorEl = document.getElementById("visit-form");

            this.lastName = document.getElementsByName("visitorLastName")[0].value || "";
            this.mainName = document.getElementsByName("visitorName")[0].value || "";
            this.patrName = document.getElementsByName("visitorPatrName")[0].value || "";

            this.visitPurpose = document.getElementsByName("purpose")[0].value || "";
            this.visitDescription = document.getElementsByName("description")[0].value || "";
            this.visitUrgency = document.getElementsByName("urgency")[0].value || "";

        if (document.getElementsByName("age")[0])
            this.visitorAge = document.getElementsByName("age")[0].value || "";
        if (this.doctorEl.name === "form-cardiologist") {

            if(document.getElementsByName("lastVisitDate")[0])
                this.lastVisitDate = document.getElementsByName("lastVisitDate")[0].value || "";

            this.doctor = doctorSelect.options[0].value; //TODO потом переписать этот костыль на:
            // this.doctor = doctorSelect.options[doctorSelect.options.id].value;
        }
        if (this.doctorEl.name === "form-dentist") {
            this.lastVisitDate = document.getElementsByName("lastVisitDate")[0].value || "";
            this.doctor = doctorSelect.options[1].value || "";
        }
        if (this.doctorEl.name === "form-therapist") {
            // this.visitorAge = document.getElementsByName("age").value;
            this.doctor = doctorSelect.options[2].value || "";
        }

    }

    correctUndefinds(){ // этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
        //лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";
        for (let key in this) if (this.key === undefined) this.key = "";
    }
    async create() {
        const nextCard = await Server.createCard({
            lastName: this.lastName,
            mainName: this.mainName,
            patrName: this.patrName,
            visitPurpose: this.visitPurpose,
            visitDescription: this.visitDescription,
            visitUrgency: this.visitUrgency,
            visitorAge: this.visitorAge,
            lastVisitDate: this.lastVisitDate,
            doctor: this.doctor,
        }, 'e4d44614-f3af-486c-ae85-8d0bcd76f052');

        return nextCard;
    }

}
