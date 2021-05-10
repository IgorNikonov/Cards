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

searchCardInput.addEventListener('input', filterAll);
statusSelect.addEventListener('change', filterAll);
urgencySelect.addEventListener('change', filterAll);

async function filterAll() {
    document.getElementById('card-container').innerHTML = '';

    const serverData = await Server.getAllCards(localStorage.getItem('token'));


    const filterByInput = serverData.filter(card => card.visitPurpose.includes(searchCardInput.value.toLowerCase())
        || card.visitDescription.includes(searchCardInput.value.toLowerCase()));
    if (statusSelect.value !== "" && urgencySelect.value === "") {
        const filterByStatus = filterByInput.filter(card => card.visitStatus === statusSelect.value);
        filterByStatus.forEach(card => Desk.addCard(card));
    } else if (statusSelect.value === "" && urgencySelect.value !== "") {
        const filterByUrgency = filterByInput.filter(card => card.visitUrgency === urgencySelect.value);
        filterByUrgency.forEach(card => Desk.addCard(card));
    } else if (statusSelect.value !== "" && urgencySelect.value !== "") {
        const filterByStatus = filterByInput.filter(card => card.visitStatus === statusSelect.value);
        const filterByUrgency = filterByStatus.filter(card => card.visitUrgency === urgencySelect.value);
        filterByUrgency.forEach(card => Desk.addCard(card));
    } else {
        filterByInput.forEach(card => Desk.addCard(card));
    }
}


export async function handleData(token) {
    const cardsFromServer = await Server.getAllCards(token);
    await cardsFromServer.forEach(card => Desk.addCard(card));
}
