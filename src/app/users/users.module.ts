import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
