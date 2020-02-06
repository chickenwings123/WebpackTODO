 
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
            let proj_locate = this.projLocation;

            return proj_locate
        }

        
    }     

}
 

const listBUtton = () => { 
    const nav_div = document.getElementById('navbar');
    const formTodoNew = document.getElementById('formDiv');
    const newtodoBtn = document.createElement('button')
    newtodoBtn.classList.add("button2")
    newtodoBtn.innerHTML="Create a todo"//add new to do
    newtodoBtn.addEventListener('click', ()=> {
        if (formTodoNew.style.display === "block") {
            formTodoNew.style.display = "none";
        
        } else  {formTodoNew.style.display = "block" }

        })
        nav_div.appendChild(newtodoBtn)
    }
    

 

export {getTodoInfo,
        listBUtton}

        