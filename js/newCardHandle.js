import Server from "./server.js";
import Desk from "../LizaModal/desk.js";
// export let cardsFromForm = []; // основной массив карточек
export async function newCardHandle(card) {
    document.getElementById('card-container').innerHTML = '';
    // let cardsFromLS = JSON.parse(localStorage.getItem('cards'));
    // отправил карточку из формы на сервер, получил её же с полем "id" в response и направил на рендер на экран
    await Server.createCard(card,  localStorage.getItem('token'))
        // Desk.addCard(res);   // Desk.addCard(card); // отправил объект из формы новую карточку на рендер на экран
        // cardsFromLS.push(res);
        // localStorage.setItem("сards", JSON.stringify(cardsFromLS));
    const renewedCards = await Server.getAllCards(localStorage.getItem('token'));
    renewedCards.forEach(card => Desk.addCard(card));
}