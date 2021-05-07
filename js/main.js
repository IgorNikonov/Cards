import FilterCards from "./filterCards.js"
import Login from "./Login.js";
import Desk from "./desk.js";
import Server from "./server.js"
export const deskComp = document.getElementById('desk'); // сюда будем выкладывать все формы

Desk.render(deskComp); //выводим в DOM рабочий стол карточек
Login();  //запустили процедуру логина


// Filter functionality
const searchCardInput = document.getElementById('search-by-description');
const statusSelect = document.getElementById('visit-status');
const urgencySelect = document.getElementById('urgency-status');

searchCardInput.addEventListener('input', FilterCards.searchTitle);
statusSelect.addEventListener('change', FilterCards.searchStatus);
urgencySelect.addEventListener('change', FilterCards.searchUrgency);


export async function handleData(token) {
    const cardsFromServer = await Server.getAllCards(token);
    await cardsFromServer.forEach(card => Desk.addCard(card));
}
