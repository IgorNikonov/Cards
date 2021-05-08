import {doctorSelect} from "../componentsDeclaration/configElements.js";

export class CardHandler {   // внимание: это полученный объект из visitForm, в нем НЕТ еще id карточки!
// id карточки будет позднее возвращён с сервера в response

    constructor() {
        let doctorEl = document.getElementById("visit-form");
        const visitorProps = ["lastName", "mainName", "patrName", "purpose", "description", "urgency", "hadDeseases",
            "bodyWeightIndex", "pressure", "age", "lastVisitDate"];

        for (let i = 0; i < visitorProps.length; i++) {
            if (document.getElementsByName(`${visitorProps[i]}`)[0])
                this[visitorProps[i]] = document.getElementsByName(`${visitorProps[i]}`)[0].value || "";
        }

        switch (doctorEl.name) {
            case "form-cardiologist":
                this.doctor = doctorSelect.options[0].value; //TODO потом переписать этот костыль
                break;
            case "form-dentist":
                this.doctor = doctorSelect.options[1].value || "";
                break;
            case "form-therapist":
                this.doctor = doctorSelect.options[2].value || "";
                break;
            default:
        }

        this.visitStatus = (Math.random() > 0.5) ? "актуален" : "закрыт";
    }

    // correctUndefinds(){ // этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
    //     //лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";
    //     for (let key in this) if (this.key === undefined) this.key = "";
    // }
}
