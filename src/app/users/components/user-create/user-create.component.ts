import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @Input() modal: any;
  @Output() handleAddUser = new EventEmitter<any>();
  habilities: any = signal([]);
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get habilityField() {
    return this.form.get('habilities');
  }
  get nameField() {
    return this.form.get('fullName')?.get('name');
  }
  get lastNameField() {
    return this.form.get('fullName')?.get('lastName');
  }
  get ageField() {
    return this.form.get('age');
  }

  buildForm() {
    this.form = this.fb.group({
      fullName: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]]
      }),
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      habilities: [''],
    });
  }

  addHability(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.habilityField?.setValue('')
    this.habilities.update((values: any) => {
      return [...values, value]
    });
  }

  addUser() {
    const user = {
      ...this.form.value,
      habilities: this.habilities()
    }
    this.handleAddUser.emit(user);
    this.modal.close();
  }

  deleteHability(index: number) {
    this.habilities.mutate((state: any) => {
      state.splice(index, 1);
    });
  }
}
