import Server from "./server.js";
import Desk from "../LizaModal/desk.js";

export default class FilterCards{
  // const cardsContainer = document.querySelector('.cards-container');
  // static searchCardInput = document.getElementById('search-by-description');
  // static statusSelect = document.getElementById('visit-status')
  // static urgencySelect = document.getElementById('urgency-status');

  // searchCardInput.addEventListener('input', searchTitle);

  static async searchTitle(e) {
    document.getElementById('card-container').innerHTML = '';
    
    const cards = await Server.getAllCards(Server.token);
    const cardsToShow = cards.filter(card => {
      return card.visitPurpose.includes(e.target.value.toLowerCase()) 
      || card.visitDescription.includes(e.target.value.toLowerCase());
    });
    
    cardsToShow.forEach(card => Desk.addCard(card));
  }

  static async searchUrgency(e) {
    document.getElementById('card-container').innerHTML = '';

    const cards = await Server.getAllCards(Server.token);

    if (e.target.value !== 'all') {
      const cardsToShow = cards.filter(card => card.visitUrgency === e.target.value);
      cardsToShow.forEach(card => Desk.addCard(card));
    } else {
      JSON.parse(localStorage.getItem('cards')).forEach(card => Desk.addCard(card));
    }
  }

  static async searchStatus() {
    document.getElementById('card-container').innerHTML = '';

    const cards = await Server.getAllCards(Server.token);

    if (e.target.value !== 'all') {
      const cardsToShow = cards.filter(card => card.visitStatus === e.target.value);
      cardsToShow.forEach(card => Desk.addCard(card));
    } else {
      JSON.parse(localStorage.getItem('cards')).forEach(card => Desk.addCard(card));
    }
  }
}