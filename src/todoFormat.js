import { getTodoInfo } from "./todoInfo";
import { listCard } from "./domContent";
import { Project } from "./project";
import {addnewTodo} from "./todoInfo"
import {exitDiv} from "./projectFormat"

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
    todoTitle.required=true;
    todoForm.appendChild(todoTitle);
    todoTitle.placeholder="Title";

    const todoDescripton = document.createElement('input');
    todoDescripton.type = "text";
    todoDescripton.name="todoDescripton"
    todoDescripton.placeholder = "Description"
    todoDescripton.required=true;
    todoForm.appendChild(todoDescripton);

   

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.name="dueDate";
    dueDate.required= true;
    dueDate.placeholder = "Due Date"
    todoForm.appendChild(dueDate);

    const priority = document.createElement('select');
    priority.id="Priority"
    priority.required=true;
    priority.name="priority"

    const lowPrio = document.createElement('option');
    lowPrio.name= "low"
    lowPrio.textContent="Low";
    priority.appendChild(lowPrio);

    const medPrio = document.createElement('option');
    medPrio.textContent="Medium";
    medPrio.name="med"
    priority.appendChild(medPrio)
    

    const highPrio = document.createElement('option');
    highPrio.name ="high"
    highPrio.textContent="High";
    priority.appendChild(highPrio);
    todoForm.appendChild(priority);
    highPrio.innerHTML= "High";
    


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
    const exitBtn = document.createElement('button');
    exitBtn.type="button"
    exitBtn.name = "exit"
    exitBtn.id = "exitTodo"
    exitBtn.innerHTML="Exit"

    todoForm.appendChild(exitBtn)
    todoCard.appendChild(todoForm);
    mainDiv.appendChild(todoCard);
     
}

const todocreateDiv = () => {
   
/////////////////////////////////////////////////
// create a close  button 
////////////////////
 
    document.getElementById('listFormID').addEventListener('submit', (e) => {
        if (document.getElementById('forms').contains(e.target)){ 
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
        document.getElementById('forms').style.display="none";
        document.getElementById('mainDiv').className ="";
        
    } else return
    }
    )


}
 
const todoAdd_proj = (projName) => {
    const proj_name= document.createElement('option')
    proj_name.textContent = projName
     document.getElementById('select_project').appendChild(proj_name)

}
 

const exitBtnFunc = (whichForm) => { 
    
  document.getElementById(whichForm).addEventListener('click', () => {
    document.getElementById('forms').style.display="none";
    document.getElementById('mainDiv').className =""
}
)  }
 
export {todoAddForm,
    todocreateDiv,
    todoAdd_proj,
    exitBtnFunc
    }