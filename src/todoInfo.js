
class getTodoInfo {
    constructor(title,description,dueDate,priority,num){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.num = num;

        this.mergeContent = (i) => {
            let listTitle = document.getElementById('title_h1'+i);
            listTitle.textContent = this.title;
            let listDue = document.getElementById('due_id'+i);
            listDue.textContent=this.dueDate;
            let listDescription = document.getElementById('description_id'+i);
            listDescription.textContent=this.description;
            let listPriority = document.getElementById('priority_id'+i);
            listPriority.textContent= this.priority;
        }
    }     

}
   
export {getTodoInfo}

