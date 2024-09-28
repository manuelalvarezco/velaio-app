import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  @Input() modal: any;
  @Output() handleAddUser = new EventEmitter<any>();
  habilities: any = [];
  form: FormGroup = new FormGroup({});
  habilityText = new FormControl('');
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get nameField() {
    return this.form.get('name');
  }
  get ageField() {
    return this.form.get('age');
  }
  get habilitiesField() {
    return this.form.get('habilities') as FormArray;
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      habilities: this.fb.array([]),
    });
  }

  addHability(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.habilitiesField.push(this.createHabilityField(value));
    this.habilityText.setValue('');
  }

  addUser() {
    const user = {
      ...this.form.value,
      habilities: this.habilitiesField.value.map(
        (hability: any) => hability.name
      ),
    };
    this.handleAddUser.emit(user);
    this.modal.close();
  }

  deleteHability(index: number) {
    this.habilitiesField.removeAt(index);
  }

  private createHabilityField(value: string) {
    return this.fb.group({
      name: [value, Validators.required],
    });
  }
}
