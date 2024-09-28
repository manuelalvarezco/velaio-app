import { Component, computed, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

interface Tasks {
  id: number;
  name: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks = signal([]);
  number = signal(1);
  filter = signal('all');
  taskByFilter: any = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();
    if (filter === 'pending') {
      return tasks.filter((task: any) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task: any) => task.completed);
    }
    return tasks;
  });
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.myTasks$.subscribe((tasks: any) => {
      this.tasks.set(tasks);
    });
  }

  changeFilter(filter: string) {
    this.filter.set(filter);
  }

  handleToggleTask(event: Event, task: any) {
    const index = this.tasks().findIndex((item: any) => item.id === task.id);
    this.tasks.update((prevState: any) => {
      return prevState.map((task: any, position: number) => {
        return position === index
          ? {
              ...task,
              completed: true,
            }
          : task;
      });
    });
  }
}
