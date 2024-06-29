import { Component, OnInit, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFabAnchor } from '@angular/material/button';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidateUrl } from '../../core/validators/url.validator';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { InputComponent } from '../../shared/form-elements/input/input.component';

@Component({
  selector: 'app-task1',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIcon,
    MatFabAnchor,
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatRadioGroup,
    MatRadioButton,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerModule,
    InputComponent,
  ],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss',
})
export class Task1Component implements OnInit {
  fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      company: this.fb.array([]),
    });
  }

  get companyFormArray() {
    return this.form.get('company') as FormArray;
  }

  newCompany(): FormGroup {
    return this.fb.group({
      companyName: new FormControl('', Validators.required),
      companyUrl: new FormControl('', ValidateUrl),
      companyDescription: new FormControl(''),
      jobPosition: new FormArray([]),
    });
  }

  addCompany() {
    this.companyFormArray.push(this.newCompany());
  }

  removeCompany(compIndex: number) {
    this.companyFormArray.removeAt(compIndex);
  }
  jobPositionFormArray(compIndex: number): FormArray {
    return this.companyFormArray.at(compIndex).get('jobPosition') as FormArray;
  }

  newPosition(): FormGroup {
    return new FormGroup({
      positionName: new FormControl('', Validators.required),
      positionLevel: new FormControl(''),
      positionDescription: new FormControl(''),
      positionStartDate: new FormControl('', Validators.required),
      positionEndDate: new FormControl('', Validators.required),
    });
  }

  addJobPosition(compIndex: number) {
    this.jobPositionFormArray(compIndex).push(this.newPosition());
  }

  removeJobPosition(compIndex: number, posIndex: number) {
    this.jobPositionFormArray(compIndex).removeAt(posIndex);
  }

}
