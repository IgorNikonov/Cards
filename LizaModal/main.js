import Server from "../js/server.js";
import FilterCards from "../js/filterCards.js"
import WrapCardHTML from "../js/WrapCardHTML.js";

export const deskComp = document.getElementById('desk'); // сюда будем выкладывать все формы

import Login from "./Login.js";
import Desk from "./desk.js";
Desk.render(deskComp);
Login();

JSON.parse(localStorage.getItem('cards')).forEach(card => Desk.addCard(card));

// Delete Card functionality
const deleteCardBtn = document.getElementById('delete-btn');
deleteCardBtn.addEventListener('click', deleteCard);

async function deleteCard() {
  await Server.deleteCard(this.id, Server.token);
  localStorage.removeItem('cards');
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