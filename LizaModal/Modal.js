import LoginComp from './loginComponents.js'
export class Modal {
    constructor(modal) {
        this.modal = modal;
        this.self = document.createElement('div');
        this.modalContent = document.createElement('div');
        this.modalHeader = document.createElement('div');
        this.modalTitle = document.createElement('h5');
        this.closeBtn = document.createElement('span')
        this.form = document.createElement('div')
    }

    renderModal() {
        this.self.classList.add('modal');
        this.self.id = 'modal';
        this.modalContent.classList.add('modal-content');
        this.modalHeader.classList.add('modal-header');
        this.closeBtn.classList.add('close-modal');
        this.closeBtn.innerText = 'x';
        this.modalTitle.classList.add('modal-title');
        this.form.classList.add('modal-form');
        this.modalHeader.append(this.modalTitle, this.closeBtn);
        this.modalContent.append(this.modalHeader, this.form);
        this.self.append(this.modalContent);
        modal.append(this.self)

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


    }
}