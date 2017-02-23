<<<<<<< HEAD
export class Task{
=======
export class Task {
  _id: string;
>>>>>>> Final Commit
  date: string;
  title: string;
  description: string;
  priority: string;

<<<<<<< HEAD
  constructor() {
    this.date = '';
    this.title = '';
    this.description = '';
    this.priority = '';
  }
}
=======
  constructor( taskId?: string,taskDate?: string,  taskTitle?: string, taskDescription?: string, taskPriority?: string) {

    if (taskId && taskDate && taskTitle && taskDescription && taskPriority) {
      this._id = taskId;
      this.date = taskDate;
      this.title = taskTitle;
      this.description = taskDescription;
      this.priority = taskPriority;
    }

    else {
      this._id='';
      this.date = '';
      this.title = '';
      this.description = '';
      this.priority = '';

    }

  }
}
>>>>>>> Final Commit
