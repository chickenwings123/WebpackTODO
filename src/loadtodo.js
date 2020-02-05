import * as todoForm_consts  from "./todoFormat";
import * as todoContent from "./domContent";
import * as projContent from "./projectFormat";

const startProgram = () => {
    todoForm_consts.todoAddForm();
    todoForm_consts.todocreateDiv();
    todoContent.listBUtton();
    projContent.projectAddForm();
    projContent.projaddButton();
    
}

export {startProgram}