 import { exitBtnFunc } from "./todoFormat"
class getTodoInfo {
    constructor(title,description,dueDate,priority,num,projLocation){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.num = num;
        this.projLocation = projLocation;

        this.mergeContent = (i) => {
            let listTitle = document.getElementById('title_h1'+i);
            
            listTitle.textContent = this.title;
            let listDue = document.getElementById('due_id'+i);
            listDue.textContent=this.dueDate;
            let listDescription = document.getElementById('description_id'+i);
            listDescription.textContent=this.description;
            let listPriority = document.getElementById('priority_id'+i);
            listPriority.textContent= this.priority;
             


        }


    }     

}
 

const listBUtton = () => { 

   
    
    const nav_div = document.getElementById('navbar');
    const formTodoNew = document.getElementById('forms');
    const newtodoBtn = document.createElement('button')
    newtodoBtn.id="NewToDo"
    
    newtodoBtn.innerHTML="Create a todo"//btn to add new to do
    newtodoBtn.addEventListener('click', ()=> {//hide.show todo form

        document.getElementById('mainDiv').className ="blur";
        if (formTodoNew.style.display === "block") {
            formTodoNew.style.display = "none";
            document.getElementById('todoDiv').style.display = "none";
            document.getElementById('mainDiv').className =""
            
        } else  {formTodoNew.style.display = "block";
    document.getElementById('todoDiv').style.display = "block";
    document.getElementById('projFormat').style.display="none";
    document.getElementById('mainDiv').className ="blur"; }
    
        })
        nav_div.appendChild(newtodoBtn)
        
    }
    
export {getTodoInfo,
        listBUtton}

        