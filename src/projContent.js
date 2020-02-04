
const projectButon = () => { 
    const createProjButton = document.createElement('button');
    createProjButton.innerHTML ="Add a Project"
    createProjButton.addEventListener('click', () => {
      
        if (projHold.style.display === "none"){
          projHold.style.display = "block";
          } else {
            projHold.style.display = "none";
          }
    }  );
    mainDiv.appendChild(createProjButton);
}
 
const project_Div =  (y) => {

    const projHold = document.getElementById('projHold')

    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = "proj_create"

    const projectTitle = document.createElement('h1');
    projectTitle.id=('title'+y)
    newProjectDiv.appendChild(projectTitle);

    const projectDescription = document.createElement('h3');
    projectDescription.id = ('description'+y)
    newProjectDiv.appendChild(projectDescription);

    projHold.appendChild(newProjectDiv);
    const mainDiv = document.getElementById('mainDiv')
    mainDiv.appendChild(projHold)
 
 
}

export {project_Div,
        projectButon}
 
