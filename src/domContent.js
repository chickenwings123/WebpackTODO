const list_Div = document.getElementById('listDiv')
const mainContent = document.getElementById('mainDiv')
const sideDiv = document.getElementById('sidebarDiv')


const listBUtton = () => { 
const hideTodos = document.getElementById('todos')
const hide_show_listCard = document.createElement('button')
hide_show_listCard.classList.add("button2")
hide_show_listCard.innerHTML="Your Todos"//hides and shows the todos
hide_show_listCard.addEventListener('click', ()=> {
    if (hideTodos.style.display === "none") {
      hideTodos.style.display = "grid";
          } else {
            hideTodos.style.display = "none";
          }
    })
    sideDiv.appendChild(hide_show_listCard)
}

 
const listCard = ( i) => {
  
  
    const listcardDiv = document.createElement('div');
    listcardDiv.classList.add("listClass")
    listcardDiv.id=('listDivID'+i)
    const todoDivs= document.getElementById('todos')
    const title_h1 = document.createElement('h1');
    title_h1.id=('title_h1'+i)
    const due_h3 = document.createElement('h3');
    due_h3.id = ('due_id'+i)
    const description_h3 = document.createElement('h3');
    description_h3.id = ('description_id'+i)
    const priority_h3 = document.createElement('h3');
    priority_h3.id = ('priority_id'+i)

    listcardDiv.appendChild(title_h1);
    listcardDiv.appendChild(due_h3);
    listcardDiv.appendChild(description_h3);
    listcardDiv.appendChild(priority_h3);

    todoDivs.appendChild(listcardDiv);
    

}
const todoNew = () => {
  const todoNew = document.createElement('div');
  

}

export {listCard,
        listBUtton,
    }