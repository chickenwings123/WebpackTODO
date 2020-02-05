
const projectButon = () => { 
    const createProjButton = document.createElement('button');
    const side_div = document.getElementById('sidebarDiv')
    createProjButton.innerHTML ="Your Projects"
    createProjButton.classList.add("button2")
    createProjButton.addEventListener('click', () => {
      
        if (projHold.style.display === "none"){
          projHold.style.display = "block";
          } else {
            projHold.style.display = "none";
          }
    }  );
    side_div.appendChild(createProjButton);
}
 
const project_Div =  (y) => {

    const proj_Hold = document.getElementById('projHold')

    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = "proj_create"

    const projectTitle = document.createElement('h1');
    projectTitle.id=('title'+y)
    newProjectDiv.appendChild(projectTitle);

    const projectDescription = document.createElement('h3');
    projectDescription.id = ('description'+y)
    newProjectDiv.appendChild(projectDescription);

    proj_Hold.appendChild(newProjectDiv);
    const mainDiv = document.getElementById('mainDiv')
    mainDiv.appendChild(projHold)
 
}

export {project_Div,
        projectButon}
 
