 
const mainDiv = document.getElementById("mainDiv") 
const sidebarDiv = document.getElementById("sidebarDiv") 

const listBUtton = () => { 
const hide_show_listCard = document.createElement('button')
hide_show_listCard.innerHTML="Your Todos"
hide_show_listCard.addEventListener('click', ()=> {
    if (listDiv.style.display === "none") {
            listDiv.style.display = "block";
          } else {
            listDiv.style.display = "none";
          }
    })
    sidebarDiv.appendChild(hide_show_listCard)
}
listBUtton();
 


const listCard = ( i) => {
    const listDiv = document.getElementById("listDiv")
    
    const listcardDiv = document.createElement('div');
    
    listcardDiv.id=('listDivID'+i)

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

    listDiv.appendChild(listcardDiv);
    sidebarDiv.appendChild(listDiv)

}





export {listCard,
        listBUtton,
    }