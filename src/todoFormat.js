import { getTodoInfo } from "./todoInfo";
import { listCard } from "./domContent";
 
import {addnewTodo} from "./todoInfo"

let i = 0;

     
const todoAddForm = () => {
    const nav_div = document.getElementById('navbar');
     

    const mainDiv = document.getElementById('formDiv')
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

    const todo_submit_btn = document.createElement('input');
    todo_submit_btn.type="submit";
    todoForm.appendChild(todo_submit_btn);

    
    todoCard.appendChild(todoForm);
    mainDiv.appendChild(todoCard);
     
}

const todocreateDiv = () => {
    document.getElementById('listFormID').addEventListener('submit', (e) => {
        
        listCard(i);
        const formData = new FormData(e.target);
        const todo_title = formData.get('todoTitle');
        const todo_description = formData.get('todoDescripton');
        const formdueDate = formData.get('dueDate');
        const formPriority = formData.get('priority');
        
        let formContents = new getTodoInfo(todo_title,todo_description,formdueDate,formPriority,i)

        formContents.mergeContent(i);
        i++
        e.preventDefault()
        
    }
    )
}


 


export {todoAddForm,
    todocreateDiv}