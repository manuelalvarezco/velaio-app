import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  private myTasks = new BehaviorSubject<any[]>([]);
  myTasks$ = this.myTasks.asObservable();

  constructor() {
    this.myTasks.next(this.tasks);
  }

  addTask(task: Task) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    this.myTasks.next(this.tasks);
  }
}
