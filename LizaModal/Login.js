import { Modal } from './Modal.js'
import LoginComp from './loginComponents.js';

export class LoginModal extends Modal {
    constructor(modal) {
        super(modal);
        this.modalTitle.textContent = 'Welcome!'
    }

    renderModal(modal) {
        super.renderModal(modal);
        const fields = new LoginComp();
        fields.render(this.form)
        const autorization = document.querySelector('.btn_log');
        autorization.addEventListener('click', () => {
            this.self.classList.add('active');
        });

        this.closeBtn.addEventListener('click', () => {
            this.self.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === this.self) {
                this.self.classList.remove('active')
            }
        })

        //    JUST TRYNG TO UNDERSTAND THIS SHIT

        window.onload = () => {
            window.sessionStorage.setItem('login', 'liza');
            window.sessionStorage.setItem('password', '123');
            const btn1 = document.getElementById('btn_log')
            const btn2 = document.getElementById('btn_create')
            const logV = document.getElementById('login');
            const passV = document.getElementById('password');
            const subBtn = document.querySelector('.modal_login_button')
            subBtn.onsubmit = () => { return false }
            subBtn.onclick = (e) => {
                e.preventDefault()
                if ((logV.value == sessionStorage.getItem('login')) && (passV.value == sessionStorage.getItem('password'))) {
                    console.log("AMEN!!!!!!")
                    this.self.classList.remove('active')
                    btn1.style.display = 'none'
                    btn2.style.display = 'block'
                    btn2.classList.remove('none')
                }
            }
        }

    }
}

