import { getTodoInfo } from "./todoInfo";
import { listCard } from "./domContent";
import { Project } from "./project";
import {addnewTodo} from "./todoInfo"
import {projArr} from "./projectFormat"

let i = 0;

const mainDiv = document.getElementById('forms')

const todoAddForm = () => {
    
    const todoCard = document.createElement('div');
    todoCard.id="todoDiv";
   
    const todoForm = document.createElement('form');
    todoForm.id="listFormID"

    const todoTitle = document.createElement('input');
    todoTitle.type = "text";
    
    todoTitle.name="todoTitle";
    todoForm.appendChild(todoTitle);

    const todoDescripton = document.createElement('input');
    todoDescripton.type = "text";
    todoDescripton.name="todoDescripton"
    todoForm.appendChild(todoDescripton);

    const dueDate = document.createElement('input');
    dueDate.type = "text";
    dueDate.name="dueDate"
    todoForm.appendChild(dueDate);

    const priority = document.createElement('input');
    priority.type = "text";
    priority.name="priority"
    todoForm.appendChild(priority);
    
    const projSel = document.createElement('select');
    projSel.id ="select_project"
    projSel.name="projLocation"

//default project
    //const defaultProj = document.createElement('option');
  
   // defaultProj.textContent="Default";
    //projSel.appendChild(defaultProj);
    todoForm.appendChild(projSel);
 
    const todo_submit_btn = document.createElement('input');
    todo_submit_btn.type="submit";
    todoForm.appendChild(todo_submit_btn);
 
    todoCard.appendChild(todoForm);
    mainDiv.appendChild(todoCard);
     
}

const todocreateDiv = () => {
    document.getElementById('listFormID').addEventListener('submit', (e) => {
       //gets todo info
        const formData = new FormData(e.target);
        const todo_title = formData.get('todoTitle');
        const todo_description = formData.get('todoDescripton');
        const formdueDate = formData.get('dueDate');
        const formPriority = formData.get('priority');
        const formProj = formData.get('projLocation');
        let formContents = new getTodoInfo(todo_title,todo_description,formdueDate,formPriority,i,formProj)
        listCard(i,formProj);
        formContents.mergeContent(i);
        i++
        e.preventDefault()
        
    }
    )
}
 
const todoAdd_proj = (projName) => {
    const proj_name= document.createElement('option')
    proj_name.textContent = projName
     document.getElementById('select_project').appendChild(proj_name)

}

export {todoAddForm,
    todocreateDiv,
    todoAdd_proj
    }