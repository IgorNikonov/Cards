import Server from "./server.js"
import Desk from "../LizaModal/desk.js"

export async function handleData(token) {
  const cardsFromServer = await Server.getAllCards(token);
  localStorage.setItem('cards', JSON.stringify(cardsFromServer));
  cardsFromServer.forEach(card => Desk.addCard(card));
}