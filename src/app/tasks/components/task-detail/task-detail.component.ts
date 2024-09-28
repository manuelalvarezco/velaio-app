import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  @Input() task: any;
  @Output() handleToggleTask = new EventEmitter();
  openDetail = false;
  closeTasks = false;

  openCloseDetail() {
    this.openDetail = !this.openDetail;
  }


  toggleChecked(event: any, task: any) {
    this.handleToggleTask.emit(event.currentTarget.checked);
  }
}
