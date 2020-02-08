import * as todoForm_consts  from "./todoFormat";
import * as todoContent from "./domContent";
import * as projContent from "./projectFormat";
import * as todoClass from "./todoInfo"
import * as projClass from "./project"
import * as projStuff from "./projContent"
const startProgram = () => {
    todoForm_consts.todoAddForm();
    todoForm_consts.todocreateDiv();
    todoForm_consts.exitBtnFunc('exitTodo')
   
    todoContent.listBUtton();
    projContent.projectAddForm();
    projContent.projaddButton();
    todoClass.listBUtton();
    projClass.proj_new_btn();
    todoForm_consts.exitBtnFunc('exitProji')
    projStuff.project_Div(0,"Default");
    //jkhkjh is the project div's id
    todoForm_consts.todoAdd_proj("Default")

    

 

    
}

export {startProgram}