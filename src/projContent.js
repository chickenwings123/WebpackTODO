
const projectButon = () => { 
  //HIDES AND SHOWS THE PROJECTS
    const createProjButton = document.createElement('button');
    const side_div = document.getElementById('sidebarDiv')
    createProjButton.innerHTML ="Your Projects"
    createProjButton.classList.add("button2")
    const thisId = projHold.id
    createProjButton.addEventListener('click', () => {
      
        if (projHold.style.display === "none" ){
          projHold.style.display = "block";
          } else {
            projHold.style.display = "none";
          }
    }  );
    side_div.appendChild(createProjButton);
     
}
 
const project_Div =  (y,proj_title) => {
  //creates project div

    const proj_Hold = document.getElementById('projHold')

    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = (proj_title)

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

const defaultProj = () => {
  project_Div('0','Default')
  document.getElementById('title0').textContent="Default Project"
  document.getElementById('description0').textContent="List of to-dos"
}

export {project_Div,
        projectButon,
      defaultProj}
 
