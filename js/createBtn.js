export class CreateBtn {
    constructor(parent, {id, tag, type, className, innerText, handler}){
        this.id = id;
        this.tag = tag;
        this.type = type;
        this.className = className;
        this.innerText = innerText;
        this.btnEl = document.createElement(this.tag);
        this.handler = handler;
        this.parent = parent;
    }
    render(){
        const {id, type, className, innerText, btnEl, parent} = this;
        btnEl.id = id;
        btnEl.className = className;
        btnEl.type = type;
        btnEl.innerText = innerText;
        btnEl.addEventListener('click', this.handler);
        // btnEl.addEventListener('click', (e)=> this.handler(e) );
        parent.append(btnEl);
    }
}
