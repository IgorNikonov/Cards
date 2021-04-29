import Server from './server.js'

// const cardsContainer = document.querySelector('.cards-container');
const searchCardInput = document.getElementById('search-by-description');
const statusSelect = document.getElementById('visit-status')
const urgencySelect = document.getElementById('urgency-status');

searchCardInput.addEventListener('input', searchTitle);

export async function searchTitle(e) {
  e.preventDefault();

  document.getElementById('card-container').innerHTML = '';
  
  const cards = await Server.getAllCards(localStorage.getItem('token'));
  const cardsToShow = cards.filter(card => {
    return card.visitPurpose.includes(searchCardInput.value.toLowerCase()) 
    || card.visitDescription.includes(searchCardInput.value.toLowerCase());
  });
  localStorage.setItem('cards', JSON.stringify(cardsToShow));
  console.log(cardsToShow);
}

urgencySelect.addEventListener('change', searchUrgency)

export async function searchUrgency(e) {
  console.clear();
  const cards = await Server.getAllCards(localStorage.getItem('token'));
  let cardsToShow = '';
  if (e.target.value !== 'all') {
    cardsToShow = cards.filter(card => card.visitUrgency === urgencyInput.value);
  } else {
    cardsToShow = cards;
  }
  localStorage.setItem('cards', JSON.stringify(cardsToShow));
  console.log(cardsToShow);
}