import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user: any;
  @Output() handleDeleteUser = new EventEmitter<any>()
  openDetail = false;
  deleteUser(user: any) {
    this.handleDeleteUser.emit(user);
  }
  openCloseDetail() {
    this.openDetail = !this.openDetail;
  }
}
