import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { EmptyTaskComponent } from './components/empty-task/empty-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskDetailComponent,
    TaskCreateComponent,
    EmptyTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    UsersModule,
  ],
})
export class TasksModule {}
