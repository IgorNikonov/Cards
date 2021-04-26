import * as ids from "../componentsDeclaration/configElements.js";
export const cardData = [];


export class Card {

    constructor(){
        // const {visitorLastName, visitorName, visitorPatrName,  } = ids;
        if (document.getElementById("visitorLastName"))
        {
            this.elParent = document.getElementById("visitorLastName").closest('form');
            this.lastName = document.getElementById("visitorLastName").innerHTML;
            console.log("form for: ", this.elParent.name);
            console.log("lastname: ", this.lastName);
        }

    }
    getLastName(){
        return this.lastName;
    }
}