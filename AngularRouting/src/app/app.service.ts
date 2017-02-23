<<<<<<< HEAD
import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import {Task} from "./task";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

  constructor(private http: Http){
  }

  getData(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader})
      .map(this.extractData)
      .catch(this.handleError);
  }


  addTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post('http://localhost:9000/add', task,
      {headers : jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch(e => {
        return this.handleError(e)
      });
  }

  extractData(res: any){
    let body = res.json();
    return body;
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
      if(JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      } else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    } catch(e){
      errMsg = 'Something went wrong. Please try again later.';
    }
    return Observable.throw(new Error(errMsg));
  }


=======
import {Injectable} from "@angular/core";
import {Task} from "./task";
import{Observable} from "rxjs/Rx";
import 'rxjs/add/observable/of';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()

export class AppService {
  constructor(private http: Http){

  }
  taskArray: Task[] = [];

  delete(index: number) {
    this.taskArray.splice(index, 1);
  }

  add(task:Task){
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray.push(task);
    }
  }

  update(index:number, task:Task){
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray[index] = task;
    }
  }
getData():Observable<any>{
  let jsonHeader = new Headers({
    'Content-Type': 'application/json'

    });

    let obj ={
      date:'hgfjhk',
      title: 'kunal',
      description: 'assddfgjgj',
      priority: 'low'
    };


    return this.http.get('http://localhost:9000/get/all',{headers:jsonHeader})
      .map((response:any) => {
        return this.extractData(response)})
        .catch(e => {
          return this.handleError(e)
        });
}
  addData(task:Task):Observable<any>{
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'});

    let obj ={
      date:task.date,
      title: task.title,
      description:task.description ,
      priority: task.priority
    };

    return this.http.post('http://localhost:9000/add',obj,{headers:jsonHeader})
        .map((response:any) => {
          return this.extractData(response)
        })
        .catch(e => {
          return this.handleError(e)
        });

  }
  remove(id:string):Observable<any>{
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'});
      return this.http.get('http://localhost:9000/remove/'+id,{headers:jsonHeader})
        .map((response:any) => {
          return this.extractData(response)
        })
          .catch(e => {
            return this.handleError(e)
          });
    }

    updateData(task:Task):Observable<any>{
  let jsonHeader= new Headers({
    'Content-Type':'application/json'});

      let obj ={
        date:task.date,
        title: task.title,
        description:task.description ,
        priority: task.priority,
         _id:task._id
  };

      return this.http.post('http://localhost:9000/update',obj,{headers:jsonHeader})
          .map((response:any) => {
            return this.extractData(response)
          })
          .catch(e => {
            return this.handleError(e)
          });
    }
extractData(res:any){
  let body = res.json();
  return body;
}

private handleError(error:any){
  let errMsg: string;
  try {
    if(JSON.parse(error._body).message){
      errMsg = JSON.parse(error._body).message;

    } else {
      errMsg = 'something is wrong Please check it';

    }

  }
  catch (e){
    errMsg = 'something is going wrong so check it again';
  }
  return Observable.throw(new Error(errMsg))
}
>>>>>>> Final Commit
}
