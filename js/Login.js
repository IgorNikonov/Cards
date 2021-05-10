import Server from "./server.js"
import Modal from "./Modal.js";
import VisitForm from "./visitForm.js";
import {handleData} from "./main.js";
import LoginForm from './loginForm.js'

export default class Login extends Modal {
    constructor(modal){
        super(modal)
        this.modalTitle.textContent = 'Welcome';
       
    }
    renderModal(modal){
        super.renderModal(modal)
        const content = new LoginForm();
        content.render(this.form)
        
    }
}
