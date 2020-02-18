const list_Div = document.getElementById('listDiv')
const mainContent = document.getElementById('mainDiv')
const sideDiv = document.getElementById('sidebarDiv')


const listBUtton = () => { 
const hideTodos = document.getElementById('todos')
const hide_show_listCard = document.createElement('button')
hide_show_listCard.classList.add("button2")
hide_show_listCard.id="Calendar"//hides and shows the todos
hide_show_listCard.addEventListener('click', ()=> {
    if (hideTodos.style.display === "grid") {
      hideTodos.style.display = "none";
          } else {
            hideTodos.style.display = "grid";
          }
    })
    sideDiv.appendChild(hide_show_listCard)
}
 

 
const listCard = (i,projId) => {
   //creates todo div
    const listcardDiv = document.createElement('div');
    const divexpandButton = document.createElement('button');
   
    const editBtn = document.createElement('button');
    editBtn.classList.add('button2');
    editBtn.innerHTML="Edit"
    editBtn.value="off"
    listcardDiv.appendChild(editBtn) ;
    divexpandButton.classList.add('button2')
    listcardDiv.classList.add("listClass")
    divexpandButton.innerHTML= "View  Details"
    listcardDiv.id=('listDivID'+i)
   //butn to delete to do
    const deleteTodo = document.createElement('button');
    deleteTodo.id="todo_delete";
    deleteTodo.innerHTML="Delete"
    deleteTodo.type="button";
    listcardDiv.appendChild(deleteTodo)
    deleteTodo.classList="button2"

    const todoDivs= document.getElementById(projId)
    const mainTodoDiv = document.getElementById('todos')
    const title_h1 = document.createElement('h1');
    title_h1.id=('title_h1'+i)
    const due_h3 = document.createElement('h3');
    due_h3.id = ('due_id'+i)
    const description_h3 = document.createElement('h3');
    description_h3.id = ('description_id'+i)
    description_h3.style.display="none"
    const priority_h3 = document.createElement('h3');
    priority_h3.id = ('priority_id'+i)
    priority_h3.style.display="none"


  deleteTodo.addEventListener('click', () => {
    listcardDiv.outerHTML = "";

  })



    divexpandButton.addEventListener('click', () => {
      if (description_h3.style.display === "none"  && priority_h3.style.display==="none"){
        description_h3.style.display = "block";
        priority_h3.style.display="block";
      } else if (priority_h3.style.display === "block" && description_h3.style.display==="block") {
        description_h3.style.display = "none";
        priority_h3.style.display="none";
      }
    })
    ///button so todos can be edited
    
    editBtn.addEventListener('click', () => {
      let currBtn =  editBtn.value
      switch(currBtn){

        case 'off':  document.getElementById(('listDivID'+i)).contentEditable = "true";
                      editBtn.value = "on";
                      editBtn.innerHTML="Save"
                      break;

        case 'on': document.getElementById(('listDivID'+i)).contentEditable = "false";
        editBtn.value = "off";
        editBtn.innerHTML="Edit"
        break;
        default:console.log('fa')
      }
   })

    
   
    listcardDiv.appendChild(title_h1);
    listcardDiv.appendChild(due_h3);
    listcardDiv.appendChild(description_h3);
    listcardDiv.appendChild(priority_h3);
    listcardDiv.appendChild(divexpandButton);
    todoDivs.appendChild(listcardDiv);
    
 

}
 

export {listCard,
        listBUtton,
    }