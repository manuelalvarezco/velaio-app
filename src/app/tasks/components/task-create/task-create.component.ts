import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbCalendar,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  toggleModalUser = false;
  form: FormGroup = new FormGroup({});
  habilities: string[] = [];
  openDetail = false;
  users: any[] = [];
  closeResult = '';
  today = inject(NgbCalendar).getToday();
  month = this.today.month > 9 ? this.today.month : `0${this.today.month}`;
  date = `${this.today.year}-${this.month}-${this.today.day}`;
  minDate = this.date.toString();

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get nameField() {
    return this.form.get('name');
  }
  get dateField() {
    return this.form.get('date');
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      completed: [false],
      date: ['', Validators.required],
      users: [''],
    });
  }

  createTask() {
    const task = {
      ...this.form.value,
      users: this.users,
    };
    this.tasksService.addTask(task);
    this.router.navigateByUrl('/tasks');
  }

  handleAddUsers(users: any) {
    this.users = users;
  }
}
