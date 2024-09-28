import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: ':id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
