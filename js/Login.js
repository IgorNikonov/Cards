import Server from "./server.js"
import Modal from "./Modal.js";
import VisitForm from "./visitForm.js";
import { handleData } from "./main.js";

export default function Login() {
    class LoginModal extends Modal {
        constructor({ id, classes }) {
            super({ id, classes });
        }


        createFormElements() {
            const login = document.createElement("input");
            login.type = "text";
            login.name = "login";
            login.value = "uts_@ukr.net"; //TODO Влад временно добавляет логин для облегчения тестирования
            login.placeholder = "Login";
            login.required = true;
            login.className = "modal_input";

            const password = document.createElement("input");
            password.type = "password";
            password.name = "password";
            password.value = "slyslysly"; //TODO Влад временно добавляет пароль для облегчения тестирования
            password.placeholder = "Password";
            password.required = true;
            password.classList.add("modal_input");

            const submitBtn = document.createElement("button");
            submitBtn.type = "button";
            submitBtn.textContent = "Login";
            submitBtn.classList.add("modal_login_button");
            submitBtn.addEventListener("click", () => this.checkUserLogin());

            return [login, password, submitBtn];
        }



        async getToken(loginInput, passInput) {
            return await Server.getTokenFromServer({ email: loginInput, password: passInput });
        }

        async checkUserLogin() {

            let token;
            const loginInput = document.getElementsByName("login")[0].value;
            const passInput = document.getElementsByName("password")[0].value;
            try {
                token = await this.getToken(loginInput, passInput);
            } catch (err) { console.log(err.name, err.message) }

            if (token === "Incorrect username or password" || token === undefined) {
                throw new Error("Такой пользователь не зарегистрирован, либо token undefined !");
            }
            else
                localStorage.setItem('token', `${token}`);
            handleData(localStorage.getItem('token')).then(); // получили все карточки с сервера и выложили на рабочий стол
            reassignLogBtn(); //переназзначили кнопку логина на кнопку "создать форму"
            // console.log("Вы залогинились!");
            document.getElementById("modalLogin").classList.remove("active");
        }


    }

    const loginForm = new LoginModal({
        id: "modalLogin",
        classes: ["modal"],
    });

    const modal = document.getElementById("modal");
    const loginBtn = document.getElementById("btn_log");


    function loginBtnHandler(e) {
        e.preventDefault();
        loginForm.openModal();
    }

    modal.append(loginForm.modal);
    loginBtn.addEventListener("click", loginBtnHandler); //только в таком виде можно снять обработчик в будущем



    function renderSelectFormBtn() {
        // const renewedCards = Server.getAllCards(localStorage.getItem('token'));
        // renewedCards.forEach(card => Desk.addCard(card));


        VisitForm.renderIdleForm();
    }
    function reassignLogBtn() {
        loginBtn.removeEventListener("click", loginBtnHandler);
        loginBtn.addEventListener("click", renderSelectFormBtn);
        loginBtn.innerText = "Добавить визит";

    }

}

// export function reassignBtn() {
//     const loginBtn = document.getElementById("btn_log");
//     loginBtn.addEventListener("click", VisitForm.renderIdleForm);
// }