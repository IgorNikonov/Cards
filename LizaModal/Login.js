import Modal from "./Modal.js";
import runVladForms from "../js/script.js"

export default function Login() {
    class LoginModal extends Modal {
        constructor({ id, classes }) {
            super({ id, classes });
        }
        createFormElements() {
            const login = document.createElement("input");
            login.type = "text";
            login.name = "login";
            login.placeholder = "Login";
            login.required = true;
            login.className = "modal_input";

            const password = document.createElement("input");
            password.type = "password";
            password.name = "password";
            password.placeholder = "Password";
            password.required = true;
            password.classList.add("modal_input");

            const submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.textContent = "Login";
            submitBtn.classList.add("modal_login_button");
            submitBtn.addEventListener("click", (e)=>runVladForms(e));

            return [login, password, submitBtn];
        }
    }

    const loginForm = new LoginModal({
        id: "modalLogin",
        classes: ["modal"],
    });

    const modal = document.getElementById("modal");
    const loginBtn = document.getElementById("btn_log");



    modal.append(loginForm.modal);
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.openModal();
    });

}
