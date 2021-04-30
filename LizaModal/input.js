export default class Input {
    constructor(type, placeholder, className, attri, isRequierd) {
        this.type = type;
        this.placeholder = placeholder;
        this.className = className;
        this.atri = attri;
        this.isRequierd = isRequierd;
        this.self = document.createElement('input');
    };

    createInput() {
        this.self.type = this.type;
        this.self.placeholder = this.placeholder;
        this.self.isRequierd = this.isRequierd;
        this.self.classList.add(this.className);
        this.self.setAttribute('name', this.attri);
        return this.self;
    };
};