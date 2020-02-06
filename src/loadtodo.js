import * as todoForm_consts  from "./todoFormat";
import * as todoContent from "./domContent";
import * as projContent from "./projectFormat";
import * as todoClass from "./todoInfo"
import * as projClass from "./project"

const startProgram = () => {
    todoForm_consts.todoAddForm();
    todoForm_consts.todocreateDiv();
    todoContent.listBUtton();
    projContent.projectAddForm();
    projContent.projaddButton();
    todoClass.listBUtton();
    projClass.proj_new_btn();

 

    
}

export {startProgram}