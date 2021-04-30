import Server from "./server.js";
import Desk from "../LizaModal/desk.js";
export let cardsFromForm = []; // основной массив карточек
export function newCardHandle(card) {

    debugger
    // отправил карточку из формы на сервер, получил её же с полем "id" в response и направил на рендер на экран
    Server.createCard(card,  localStorage.getItem("token") ).then(res => {
        Desk.addCard(res);   // Desk.addCard(card); // отправил объект из формы новую карточку на рендер на экран
        cardsFromForm.push(res);
        localStorage.setItem("allCards", JSON.stringify(cardsFromForm));
    });
    console.log(cardsFromForm);
}