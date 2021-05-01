import Server from "./server.js";
import Desk from "../LizaModal/desk.js";
export let cardPull = []; // основной массив карточек
export function newCardHandle(card) { //card еще не содержит id - он потом прилелит с сервера

    // отправил карточку из формы на сервер, получил её же с полем "id" в response и направил на рендер на экран
    Server.createCard(card,  Server.token ).then(res => {
        Desk.addCard(res);   // и отправил объект res сервера- в новую карточку на рендер на экран
// на этом этапе, res уже содержит полученный от сервера id
        cardPull.push(res);
        console.log(res);
        localStorage.setItem("cards", JSON.stringify(cardPull));
    });

}