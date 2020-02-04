
class Project {
    constructor(title,description,num){
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
   
export {Project}