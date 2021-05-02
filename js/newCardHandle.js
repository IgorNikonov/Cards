import Server from "./server.js";
import Desk from "../LizaModal/desk.js";

export function newCardHandle(card) {
    Server.createCard(card,  localStorage.getItem('token') ).then(res => {Desk.addCard(res)});
}