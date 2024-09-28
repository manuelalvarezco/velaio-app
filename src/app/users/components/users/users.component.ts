import {
  Component,
  EventEmitter,
  inject,
  Output,
  signal,
  TemplateRef,
} from '@angular/core';
import {
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: any = signal([]);
  @Output() handleAddUsers = new EventEmitter<any[]>();
  private modalService = inject(NgbModal);

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addUser(user: any) {
    this.users.update((values: any) => {
      return [
        ...values,
        {
          ...user,
          id: this.users.length + 1,
        },
      ];
    });
    this.handleAddUsers.emit(this.users());
  }

  handleDeleteUser(user: any) {
    const index = this.users().findIndex((item: any) => item.id === user.id);
    this.users.mutate((state: any) => {
      state.splice(index, 1);
    });
  }
}
