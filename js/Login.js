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
        const submitBtn = document.querySelector('.modal_login_button')
        submitBtn.addEventListener("click", () => this.checkUserLogin());
        
    }

    async getToken(loginInput, passInput){
        return await Server.getTokenFromServer({email: loginInput, password: passInput});
    }

    async checkUserLogin(){

        let token;
        const loginInput = document.getElementsByName("login")[0].value;
        const passInput = document.getElementsByName("password")[0].value;
        try{
        token = await this.getToken(loginInput, passInput);
        } catch(err) {console.log(err.name, err.message)}

        if (token === "Incorrect username or password" || token === undefined) {
            throw new Error("Такой пользователь не зарегистрирован, либо token undefined !");
        }
        else
        localStorage.setItem('token', `${token}`);
        handleData(Server.token).then(); // получили все карточки с сервера и выложили на рабочий стол
        reassignLogBtn(); //переназзначили кнопку логина на кнопку "создать форму"
        // console.log("Вы залогинились!");
        document.getElementById("modalLogin").classList.remove("active");
    }
    
}

export const logIn = function(){
    const autor = new Login().renderModal()

    
    const loginBtn = document.getElementById("btn_log");
    
    function loginBtnHandler(e) {
        e.preventDefault();
        loginForm.openModal();
    }
    loginBtn.addEventListener("click", loginBtnHandler);

    function renderSelectFormBtn() {
    
        VisitForm.renderIdleForm();
    }
    renderSelectFormBtn()

    function reassignLogBtn() {
        loginBtn.removeEventListener("click", loginBtnHandler);
        loginBtn.addEventListener("click", renderSelectFormBtn);
        loginBtn.innerText = "Добавить визит";

    }

}
