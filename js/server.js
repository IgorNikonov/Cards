export default class Server {
  static url = 'https://ajax.test-danit.com/api/v2/cards';
  static token = localStorage.getItem('token');

  static async getToken(userData) {
    const response = await fetch(`${Server.url}/login`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(userData)
    });
    const token = await response.text();
    return token;
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

    const data = await response.json();
    return data;
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

    const data = await response.json();
    return data;
  }

  static async deleteCard(cardId, token) {
    const response = await fetch(`${Server.url}/${cardId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${token}`}
    });
    return response;
  }

  static async getAllCards(token) {
    const response = await fetch(`${Server.url}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  }

  static async getOneCard(cardId, token) {
    const response = await fetch(`${Server.url}/${cardId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  }
}
