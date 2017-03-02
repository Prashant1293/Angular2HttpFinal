
export class Task {
  _id:string;
  date:string;
  title:string;
  description:string;
  priority:string;


  constructor(date?: string, title?: string, description?: string, priority?: string,id?:string) {

    if (date && title && description && priority) {
      this.date = date;
      this.title = title;
      this.description = description;
      this.priority = priority;
      this._id=id;
    }

    else {
      this.date = '';
      this.title = '';
      this.description = '';
      this.priority = '';
      this._id='';
    }

  }

}
