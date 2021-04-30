import Server from "../js/server.js"

import Modal from "./Modal.js";
import VisitForm from "../js/visitForm.js";

export default function Login() {
    class LoginModal extends Modal {
        constructor({ id, classes }) {
            super({ id, classes });
        }


        createFormElements() {
            const login = document.createElement("input");
            login.type = "text";
            login.name = "login";
            login.value = "team"; //TODO Влад временно добавляет логин для облегчения тестирования
            login.placeholder = "Login";
            login.required = true;
            login.className = "modal_input";

            const password = document.createElement("input");
            password.type = "password";
            password.name = "password";
            password.value = "team"; //TODO Влад временно добавляет пароль для облегчения тестирования
            password.placeholder = "Password";
            password.required = true;
            password.classList.add("modal_input");

            const submitBtn = document.createElement("button");
            submitBtn.type = "button";
            submitBtn.textContent = "Login";
            submitBtn.classList.add("modal_login_button");
            submitBtn.addEventListener("click", ()=>this.checkUserLogin());

            return [login, password, submitBtn];
        }

        //Это уже Влад переписал строки  37-44
        // checkUserLogin(){
        //     const loginInput = document.getElementsByName("login")[0].value;
        //     const passInput = document.getElementsByName("password")[0].value;
        //     document.getElementById("modalLogin").classList.remove("active");
        //     VisitForm.renderIdleForm();
        // }
        // НОВЫЙ КОД ИГОРЯ на замену:
        async checkUserLogin(){
            const loginInput = document.getElementsByName("login")[0].value;
            const passInput = document.getElementsByName("password")[0].value;
            const token = await Server.getToken({email: loginInput, password: passInput});
            localStorage.setItem('token', `${token}`);
            document.getElementById("modalLogin").classList.remove("active");
            VisitForm.renderIdleForm();

            const cardsToShow = await Server.getAllCards(Server.token);
            // localStorage.setItem('cards', JSON.stringify(cardsToShow));
        }


    }

    const loginForm = new LoginModal({
        id: "modalLogin",
        classes: ["modal"],
    });

    const modal = document.getElementById("modal");
    const loginBtn = document.getElementById("btn_log");


    //Это уже Влад переписал строки  56 - 60:
    function loginBtnHandler(e){
        e.preventDefault();
        loginForm.openModal();
    }

    modal.append(loginForm.modal);
    loginBtn.addEventListener("click", loginBtnHandler); //только в таком виде можно снять обработчик в будущем

}
