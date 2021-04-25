import {createVisitBtnCfg, globContainerID} from "../componentsDeclaration/configInFieldComp.js";
import {CreateBtn} from "./classesExtend.js";

export const globContainer = document.querySelector(globContainerID);
// рендер самой первой кнопки "создать визит"
const createVisitBtn = new CreateBtn(globContainer, createVisitBtnCfg);
createVisitBtn.render();

