import * as todoForm_consts  from "./todoFormat";
import * as todoContent from "./domContent";
import * as projContent from "./projectFormat";
import * as todoClass from "./todoInfo"
import * as projClass from "./project"
import * as projStuff from "./projContent"
const startProgram = () => {
    todoForm_consts.todoAddForm();
    todoForm_consts.todocreateDiv();
    todoContent.listBUtton();
    projContent.projectAddForm();
    projContent.projaddButton();
    todoClass.listBUtton();
    projClass.proj_new_btn();
    projStuff.project_Div(0,"Default");
    //jkhkjh is the project div's id
    todoForm_consts.todoAdd_proj("Default")
    projStuff.defaultProj();
    

 

    
}

export {startProgram}