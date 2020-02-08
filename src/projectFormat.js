import { project_Div } from "./projContent";
import { Project } from "./project";
import { projectButon } from "./projContent";
import * as todoForm from "./todoFormat";

let y=0;    
 

const projectAddForm = () => {
    //form for new project
    projectButon()
   
    const mainDiv = document.getElementById('forms')
    const projDIV = document.createElement('div')
    projDIV.id="projFormat"

    const projectForm = document.createElement('form');
    projectForm.id="projFORM"
    projectForm.className="formStyle"
     
    const projTitle = document.createElement('input');
    projTitle.name="projTitle";
    projTitle.type = "text";
    projectForm.appendChild(projTitle);

    const proj_Description = document.createElement('textarea');
    proj_Description.name="proj_Description"
    projectForm.appendChild(proj_Description);
 
    const exitProj = document.createElement('button');
    exitProj.id="exitProji"
    exitProj.name="exitProject";
    exitProj.innerHTML="Exit"
    projDIV.appendChild(exitProj)
    
    

    const proj_submit_btn = document.createElement('input');
    proj_submit_btn.type="submit";
    proj_submit_btn.id ="proj_submitbtn"
    proj_submit_btn.value ="Add a project"
    projectForm.appendChild(proj_submit_btn);
    
    projDIV.appendChild(projectForm)
    mainDiv.appendChild(projDIV); 
    
}
const projaddButton = () => {
    //gets info for new project
    document.getElementById('projFORM').addEventListener('submit', (e) => {
        
        const projData = new FormData(e.target);
        const projTitle = projData.get('projTitle');
        const proj_Description = projData.get('proj_Description');
        
        let projContents = new Project(projTitle,proj_Description,y,projTitle)
        
        project_Div(y,projTitle);
        projContents.mergeProj(y);
        y++
        projArr.push(projTitle)
 
        e.preventDefault()

        todoForm.todoAdd_proj(projTitle);
        document.getElementById('forms').style.display="none";
        document.getElementById('mainDiv').className ="";
        
    }) 

}


const defaultProj = () => {

}

let projArr = []
export{
    projectAddForm,
    projaddButton,
    projArr
}