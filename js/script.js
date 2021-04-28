import {createVisitBtnCfg, globContainerID} from "../componentsDeclaration/configElements.js";
import {CreateBtn} from "./createBtn.js";
import {cards} from "./card.js";
export const globContainer = document.querySelector(globContainerID);

const runVladForms = (e)=>{
    // e.preventDefault();
    //запускаем создание Владовских форм записи к доктору


    //скрыть Лизыну модалку:
    // const LizaModal = document.getElementById('modalLogin');
    // LizaModal.remove();


    //скрыть всё меню входа включая и модалку:
    const container = document.getElementsByClassName("container")[0];
    container.remove();

// рендер самой первой кнопки "создать визит"
    const createVisitBtn = new CreateBtn(globContainer, createVisitBtnCfg);
    createVisitBtn.render();

};


export default runVladForms;