import Input from './input.js'

export default class LoginComp {
    constructor() {
        this.self = document.createElement('form');
        this.login = new Input('text', 'Username', 'modal_input', 'text', true).createInput();
        this.password = new Input('password', 'Password', 'modal_input', 'password', true).createInput();
        this.submit = new Input('submit', '', 'modal_login_button', 'submit', false).createInput();
    }

    render(modal) {
        this.self.setAttribute('id', 'form-login');
        this.login.setAttribute('id', 'login');
        this.password.setAttribute('id', 'password');
        this.self.append(this.login, this.password, this.submit);
        modal.append(this.self)

    }
}