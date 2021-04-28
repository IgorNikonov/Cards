import {deskComp} from "../LizaModal/main.js";

export default class Desk {
    static cardDesk = `<div class="search_nav">
            <div class="search_header">
                <div class="search_icons">
                    <span class="icon_btn close"></span>
                    <span class="icon_btn minimize"></span>
                    <span class="icon_btn maximize"></span>
                </div>
                <!--                Bootstrap Test Inputs          -->
                <div class="input">
                    <input id='searchInput' type="text" placeholder="Search name">
                    <select class="form_sm form-select " aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="form-select form_sm " aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div id= "card-container" class="main_content-window">
                <p id="no-cards-note" class="main_content-text">
                    No Cards Added.
                    Login!
                </p>
            </div>
</div>`;

    constructor(){
    }
    static render(){
        document.getElementById('desk').insertAdjacentHTML("afterbegin", Desk.cardDesk);
    }
    static addCard(newCardObj){
        if(document.getElementById("no-cards-note")) document.getElementById("no-cards-note").remove();
        console.log("ура, здесь создаём HTML карточку и переходим к выкладыванию ее на стол desk !");
        const cardContainer = document.getElementById("card-container");
        const newCard = document.createElement("div");
        newCard.className = "desk-card"; //TODO отдать этот класс Лизе на стилизацию
        newCard.innerHTML = `<p>${newCardObj}</p>`;  //пока-что вывожу обьект по-корявому!!!
        cardContainer.append(newCard);
    }
    static hide(){
        deskComp.classList.add("hidden");
        deskComp.classList.remove("visible");
    }
    static show(){
        deskComp.classList.remove("hidden");
        deskComp.classList.add("visible");
    }

}


