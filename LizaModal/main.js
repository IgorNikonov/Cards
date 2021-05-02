import FilterCards from "../js/filterCards.js"
import Login from "./Login.js";
import Desk from "./desk.js";
export const deskComp = document.getElementById('desk'); // сюда будем выкладывать все формы

Desk.render(deskComp); //выводим в DOM рабочий стол карточек
Login();  //запустили процедуру логина


// Filter functionality
const searchCardInput = document.getElementById('search-by-description');
const statusSelect = document.getElementById('visit-status');
const urgencySelect = document.getElementById('urgency-status');

searchCardInput.addEventListener('input', FilterCards.searchTitle);
urgencySelect.addEventListener('change', FilterCards.searchUrgency);

