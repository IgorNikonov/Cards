import {createVisitBtnCfg, globContainerID} from "../componentsDeclaration/configElements.js";
import {CreateBtn} from "./createBtn.js";

export const globContainer = document.querySelector(globContainerID);
// рендер самой первой кнопки "создать визит"
const createVisitBtn = new CreateBtn(globContainer, createVisitBtnCfg);
createVisitBtn.render();

