import Server from "./server.js";
import Desk from "../LizaModal/desk.js";

export async function newCardHandle(card) {
    document.getElementById('card-container').innerHTML = '';
    
    await Server.createCard(card,  localStorage.getItem('token'));
        
    const renewedCards = await Server.getAllCards(localStorage.getItem('token'));
    renewedCards.forEach(card => Desk.addCard(card));
}