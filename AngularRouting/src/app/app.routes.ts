import {Routes} from '@angular/router'
import {CreateTaskComponent} from "./createTask/createTask.component";
import {ListTaskComponent} from "./list-task/list-task.component";

export const routes: Routes = [{
  path : 'create',
  component: CreateTaskComponent
},{
  path : 'list',
  component: ListTaskComponent
}];

