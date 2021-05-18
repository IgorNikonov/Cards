import {CreateBtn} from "./createBtn.js";
import {deleteCardBtnCfg, editCardBtnCfg, showMoreCardBtnCfg} from "../componentsDeclaration/configElements.js";
import Server from "./server.js";
import Desk from "./desk.js";
import changeDoctor from "./changeDoctor.js"
import {DOM_elements} from "../componentsDeclaration/configVisProp.js"

export default class WrapCardHTML {
         constructor(parent, ...args)//соберем все (кроме parent) по ...rest в массив из одного эл-та массива args[0]
    {
        Object.keys(args[0]).forEach( key=> {  this[`${key}`] = args[0][key] });
        this.DOMelements = {
            parent        : parent,
            cardEl    : document.createElement("div") };

            Object.keys(DOM_elements).forEach(key=> {
                this.DOMelements[key] = document.createElement(DOM_elements[key][2]);
            });
    }

    render(){
        const {id} =this;

        const {parent, cardEl} = this.DOMelements;

        cardEl.dataset.name = id;
        let counter = 0;
        Object.keys(DOM_elements).forEach(key=> {
            if (this[`${key}`.slice(0, -2)]) {
                this.DOMelements[key].innerText = DOM_elements[key][0] +"   " + this[`${key}`.slice(0, -2)];
                this.DOMelements[key].className =  ( counter < 4 )?  "card-item" : "card-item --hidden";
                counter++;
            }
        });

        cardEl.className = "desk-card";

        const wantedElements = [];
        for (let key in this.DOMelements) {
            if(this.DOMelements.hasOwnProperty(key) && this.DOMelements[key] !== parent)
            {
                if (this.DOMelements[key].innerText) {
                    wantedElements.push(this.DOMelements[key])
                }
            }
        }
        cardEl.append(...wantedElements);

        parent.append(cardEl);
        // сюда перенести блок кнопок (см.выше), если хочу их видеть под карточкой.
        new CreateBtn(cardEl, showMoreCardBtnCfg).render();
        new CreateBtn(cardEl, editCardBtnCfg).render();
        new CreateBtn(cardEl, deleteCardBtnCfg).render();

        // следующие 2стр кода: назначаем id всем только что созданным кнопкам:
        const showMoreBtnDOM = document.querySelectorAll(`div[data-name = "${id}"] button`);
        //ниже сработает код с:  `${id}` );
        showMoreBtnDOM.forEach(btn=> btn.dataset.name = `${id}`);
        //так же, как и сработал бы код с: id  =>  showMoreBtnDOM.forEach(btn=> btn.dataset.name = id);
    }

    /*** ФУНКЦИИ, назначаемые обработчикам КНОПОК каждой КАРТОЧКИ ***/
    static showMoreCardItems(e){
        const currentID = e.target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        const cardItems = document.querySelectorAll(`div[data-name = "${currentID}" ] .--hidden`); //получил все скрытые элементы внутри карточки с данным id
        cardItems.forEach(item=> item.classList.remove("--hidden"));
    };

    static async deleteCard(e, id){//либо пришел e от кнопки "удалить карту" либо пришел id от процедуры изменения карточки fillFormFromCard
        let currentID;
        if (e) currentID = e.target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        else
            currentID = id;
        await Server.deleteCard(currentID, localStorage.getItem('token'));
        document.getElementById('card-container').innerHTML = ''; //удаляет все карточки из desk
        await Desk.refreshDesk();  //обновляет всекарточки на столе  из БД
    };


     static async editCard({target}){ //получили id карточки
        const currentID = target.dataset.name; //получили id из сработавшей кнопки
        // const currentCard = document.querySelector(`div[data-name = "${currentID}" ]`); //получили карточку с данным id
        let card = await Server.getOneCard(currentID, localStorage.getItem('token')); //получили с сервера редактируемую карточку
        changeDoctor(target, currentID, card.doctor); //отослали редактируемуюу карточку на изменение в вызове формы
         window.scrollTo({
             top: 200,
             behavior: "smooth"
         });
    };


}