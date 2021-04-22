// console.log('script.js');
const container = document.querySelector('.container');



import {configVisitSelect, configVisitInput, configVisitTextArea} from "../componentsDeclaration/configSelectInputTextArea.js";
import SelectInputTextArea from "./SelectInputTextArea.js";


const select = new SelectInputTextArea(container, configVisitSelect);
select.render();

const input = new SelectInputTextArea(container, configVisitInput);
input.render();

const textArea = new SelectInputTextArea(container, configVisitTextArea);
textArea.render();


/*** Блок проверки работоспособности методов класса ***/
// console.log( select.getSelected() );
// select.remove();
// select.hide();
// select.show();