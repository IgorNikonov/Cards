import Server from "../js/server.js";
import FilterCards from "../js/filterCards.js"
import WrapCardHTML from "../js/WrapCardHTML.js";
// ВСЕ ИМПОРТЫ ВЫШЕ -ОТ ИГОРЯ
export const deskComp = document.getElementById('desk'); // сюда будем выкладывать все формы
import Login from "./Login.js";
import Desk from "./desk.js";
Desk.render(deskComp); //выводим в DOM рабочий стол карточек
Login();  //запустили процедуру логина


//  ВЕСЬ КОД НИЖЕ - ОТ ИГОРЯ:
if (localStorage.getItem("cards")) localStorage.removeItem("cards");

// Delete Card functionality
const deleteCardBtn = document.getElementById('delete-btn');
if (deleteCardBtn) deleteCardBtn.addEventListener('click', deleteCard);

async function deleteCard() {
    console.log('asdkfj')
    await Server.deleteCard(this.id, Server.token);
    // localStorage.removeItem('cards');
    const allCards = await Server.getAllCards(Server.token);
    localStorage.setItem('cards', JSON.stringify(allCards));
}

// Filter functionality
const searchCardInput = document.getElementById('search-by-description');
const statusSelect = document.getElementById('visit-status');
const urgencySelect = document.getElementById('urgency-status');

searchCardInput.addEventListener('input', FilterCards.searchTitle);
urgencySelect.addEventListener('change', FilterCards.searchUrgency);

// export const cardsToStore = await Server.getAllCards(Server.token);