import Server from './server.js';

let currentToken;
let currentCardId;

// LOGIN FORM (проверка регистрации и получение токена)

// Data from user
let email = document.getElementById('email');
let password = document.getElementById('password');

document.querySelector('.check').addEventListener('click', checkLogin);

async function checkLogin(e) {
  e.preventDefault();
  
  const token = await Server.getToken({email: email.value, password: password.value});
  console.log(token);
  currentToken = token;
};

// Create/Edit/Delete card, Get all cards

// Data from user
let title = document.getElementById('title');
let description = document.getElementById('description');
let selectedDoctor = document.getElementById('select-doctor');
let bp = document.getElementById('bp');
let age = document.getElementById('age');
let weight = document.getElementById('weight');

// Event triggers
document.querySelector('.send').addEventListener('click', sendData);
document.querySelector('.edit').addEventListener('click', editData);
document.querySelector('.delete').addEventListener('click', deleteData);

document.querySelector('.get-one').addEventListener('click', getTheCard);
document.querySelector('.get-all').addEventListener('click', getTheCards);

// Events (methods to create/edit/delete card, and to get the cards)
async function sendData(e) {
  e.preventDefault();

  const card = await Server.createCard({
    title: title.value,
    description: description.value,
    doctor: selectedDoctor.value,
    bloodPressure: bp.value,
    age: age.value,
    weight: weight.value 
  }, currentToken);

  console.log(card);
  currentCardId = card.id;
}

async function editData(e) {
  e.preventDefault();

  const card = await Server.editCard({
    title: title.value,
    description: description.value,
    doctor: selectedDoctor.value,
    bloodPressure: bp.value,
    age: age.value,
    weight: weight.value 
  }, currentCardId, currentToken);
  console.log(card);
}

async function deleteData(e) {
  e.preventDefault();

  const deletedSuccessfully = await Server.deleteCard(currentCardId, currentToken);
  console.log(deletedSuccessfully);
}

async function getTheCard() {
  const myCard = await Server.getOneCard(currentCardId, currentToken);
  console.log(myCard)
}

async function getTheCards() {
  const allMyCards = await Server.getAllCards(currentToken);
  console.log(allMyCards)
}