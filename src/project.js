 
class Project {
    constructor(title,description,num,arr){
        this.title=title;
        this.description=description;
        this.num = num;
        
        this.mergeProj = (y) => {
            let projTitle = document.getElementById('title'+y);
            projTitle.textContent = this.title;
            let projDescription = document.getElementById('description'+y);
            projDescription.textContent=this.description;
             
            
        }
    }        
}

const proj_new_btn = () => { 
    const nav_div = document.getElementById('navbar');
    const formTodoNew = document.getElementById('forms');//
    const newProjBtn = document.createElement('button')
    newProjBtn.classList.add("button2")
    newProjBtn.innerHTML="Create a project"
    //////add new proj
    newProjBtn.addEventListener('click', ()=> {
        document.getElementById('mainDiv').className ="blur";
        if (formTodoNew.style.display === "block") {
            formTodoNew.style.display = "none";
            document.getElementById('mainDiv').className ="";
            document.getElementById('projFormat').style.display="none"
        }
             else {
                 formTodoNew.style.display = "block";
                 document.getElementById('projFormat').style.display="block";
                 document.getElementById('mainDiv').className ="blur";
             }
    
        })
        nav_div.appendChild(newProjBtn)
    }
    


export {Project,
    proj_new_btn}