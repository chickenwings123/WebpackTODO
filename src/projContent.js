
const projectButon = () => { 
  //HIDES AND SHOWS THE PROJECTS
    const createProjButton = document.createElement('button');
    const side_div = document.getElementById('sidebarDiv')
   
    createProjButton.id="UrProjBtn"
    createProjButton.classList.add("button2")
    const thisId = projHold.id
    createProjButton.addEventListener('click', () => {
      
        if (projHold.style.display === "none" ){
          projHold.style.display = "grid";
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
    newProjectDiv.classList ="projectDiv"

    const newProjSubDiv = document.createElement('div');
    newProjSubDiv.id ="projSubDiv";

    const projectTitle = document.createElement('h1');
    projectTitle.id=('title'+y)
    newProjSubDiv.appendChild(projectTitle);

    const breakProj = document.createElement('br')
    breakProj.name="break_proj"
    newProjSubDiv.appendChild(breakProj)

    const projectDescription = document.createElement('h3');
    projectDescription.id = ('description'+y)
    newProjSubDiv.appendChild(projectDescription);

    newProjectDiv.appendChild(newProjSubDiv);
    proj_Hold.appendChild(newProjectDiv);
    const mainDiv = document.getElementById('mainDiv')
    mainDiv.appendChild(projHold)
 
}

const defaultProj = () => {
  
  document.getElementById('title0').textContent="Default Project"
  document.getElementById('description0').textContent="List of to-dos"
}

export {project_Div,
        projectButon,
      defaultProj}
 
