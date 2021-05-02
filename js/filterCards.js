import Server from "./server.js";
import Desk from "../LizaModal/desk.js";

export default class FilterCards{

    static async searchTitle(e) {
        document.getElementById('card-container').innerHTML = '';

        try {
            const cards = await Server.getAllCards(localStorage.getItem('token'));
            const cardsToShow = cards.filter(card => {
                return card.visitPurpose.includes(e.target.value.toLowerCase())
                    || card.visitDescription.includes(e.target.value.toLowerCase());
            });

            cardsToShow.forEach(card => Desk.addCard(card));
        } catch(err) {alert('пожалуйста войдите в учётную запись')}
    }

    static async searchStatus(e) {
        document.getElementById('card-container').innerHTML = '';

        try {
            const cards = await Server.getAllCards(localStorage.getItem('token'));
            
            if (e.target.value !== 'all') {
                const cardsToShow = cards.filter(card => card.visitStatus === e.target.value);
                cardsToShow.forEach(card => Desk.addCard(card));
            } else {
                cards.forEach(card => Desk.addCard(card));
            }
        } catch(err) {alert('пожалуйста войдите в учётную запись')}
    }

    static async searchUrgency(e) {
        document.getElementById('card-container').innerHTML = '';

        try {
            const cards = await Server.getAllCards(localStorage.getItem('token'));

            if (e.target.value !== 'all') {
                const cardsToShow = cards.filter(card => card.visitUrgency === e.target.value);
                cardsToShow.forEach(card => Desk.addCard(card));
            } else {
                cards.forEach(card => Desk.addCard(card));
            }
        } catch(err) {alert('пожалуйста войдите в учётную запись')}
    }
}