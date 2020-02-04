import { project_Div } from "./domContent";
import { Project } from "./project";


let y=0;    

const projectAddForm = () => {
    const mainDiv = document.getElementById('mainDiv')
    const projDIV = document.createElement('div')
    projDIV.id="projFormat"

    const projectForm = document.createElement('form');
    projectForm.id="projFORM"

    const projTitle = document.createElement('input');
    projTitle.type = "text";
    projTitle.name="projTitle";
    projectForm.appendChild(projTitle);

    const proj_Description = document.createElement('input');
    proj_Description.type = "text";
    proj_Description.name="proj_Description"
    projectForm.appendChild(proj_Description);
 
    const proj_submit_btn = document.createElement('input');
    proj_submit_btn.type="submit";
    projectForm.appendChild(proj_submit_btn);
 
    projDIV.appendChild(projectForm)
    mainDiv.appendChild(projDIV); 

    document.getElementById('projFORM').addEventListener('submit', (e) => {

        project_Div(y);
        const projData = new FormData(e.target);
        const projTitle = projData.get('projTitle');
        const proj_Description = projData.get('proj_Description');
        
        let projContents = new Project(projTitle,proj_Description,y)

        projContents.mergeProj(y);
        y++
        e.preventDefault()
       
    })

    
    
    
}
  
export{
    projectAddForm
}