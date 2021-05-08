import Server from "./server.js";
import Desk from "./desk.js";
import {handleData} from "./main.js";

export default class FilterCards{

    static async searchTitle(e) {
        document.getElementById('card-container').innerHTML = '';

        const cards = await Server.getAllCards(localStorage.getItem('token'));
        const cardsToShow = cards.filter(card => {
            return card.purpose.includes(e.target.value.toLowerCase())
                || card.description.includes(e.target.value.toLowerCase());
        });

        cardsToShow.forEach(card => Desk.addCard(card));
        
    }

    static async searchUrgency(e) {
        document.getElementById('card-container').innerHTML = '';

        const cards = await Server.getAllCards(localStorage.getItem('token'));

        if (e.target.value !== 'all') {
            const cardsToShow = cards.filter(card => card.urgency === e.target.value);
            cardsToShow.forEach(card => Desk.addCard(card));
        } else {
            await handleData(localStorage.getItem('token'));
        }
    }

    static async searchStatus(e) {
        document.getElementById('card-container').innerHTML = '';

        const cards = await Server.getAllCards(localStorage.getItem('token'));

        if (e.target.value !== 'all') {
            const cardsToShow = cards.filter(card => card.visitStatus === e.target.value);
            cardsToShow.forEach(card => Desk.addCard(card));
        } else {
            await handleData(localStorage.getItem('token'));
        }
    }
}