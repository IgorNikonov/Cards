export default class Modal {
    constructor({ id, classes }) {
        this.id = id;
        this.classes = classes;
        this.modal = this.render()

    }
    render() {
        const content = this.createForm(this.createFormElements());

        const title = this.createElement({
            elem: 'h5',
            content: 'Welcome!',
            classes: ['titel-modal']
        })
        const x = this.createElement({
            elem: 'span',
            content: 'x',
            classes: ['close-modal']
        });

        x.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.classList.remove('active')
            }
        })
        const headerModal = this.createElement({
            elem: 'div',
            content: [title, x],
            classes: ['header-modal']
        })
        const divModalContent = this.createElement({
            elem: 'div',
            classes: ['modal-content'],
            content: [headerModal, content]
        });
        const divModal = this.createElement({
            elem: "div",
            classes: this.classes,
            content: [divModalContent],
            id: this.id,
        });
        return divModal;
    }
    createElement({ elem, id, classes, content }) {
        const element = document.createElement(elem);

        if (id) {
            element.id = id;
        }
        if (classes) {
            element.classList.add(...classes);
        }
        if (content) {
            element.append(...content)
        }
        return element
    }
    createForm(formElements = []) {
        const form = document.createElement('form');
        form.id = 'log-form';
        form.action = "";
        form.append(...formElements);
        return form;
    }

    createFormElements() { }

    openModal() {
        this.modal.classList.add('active')
    }
    closeModal() {
        this.modal.classList.remove('active');
        console.log("closeModal!!!!")
    }
}