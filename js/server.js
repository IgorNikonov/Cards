import Desk from "../LizaModal/desk.js"

export default class Server {
    static url = 'https://ajax.test-danit.com/api/v2/cards';
    static token = localStorage.getItem('token');

    static async getTokenFromServer(userData) {
        const response = await fetch(`${Server.url}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        });
        return await response.text();
    }

    static async createCard(userData, token) {
        const response = await fetch(`${Server.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    }

    static async editCard(userData, cardId, token) {
        const response = await fetch(`${Server.url}/${cardId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    }

    static async deleteCard(cardId, token) {
        return await fetch(`${Server.url}/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    static async getAllCards(token) {
        const response = await fetch(`${Server.url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    }


    static async getOneCard(cardId, token) {
        const response = await fetch(`${Server.url}/${cardId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    }
// Рекомендую код ниже убрать. Его функционал выполняет недавно написанная тобой функция Desk.refreshDesk()
    // static async handleData(token) {
    //     const cardsFromServer = await Server.getAllCards(token);
    //     cardsFromServer.forEach(card => Desk.addCard(card));
    // }
}