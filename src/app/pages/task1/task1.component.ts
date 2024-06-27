import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatFabAnchor} from "@angular/material/button";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ValidateUrl} from "../../validators/url.validator";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {InputComponent} from "../../shared/form-elements/input/input.component";

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
  styleUrl: './task1.component.scss'
})
export class Task1Component {
  form: FormGroup = new FormGroup({
    companyName: new FormControl('',Validators.required),
    companyUrl: new FormControl('', ValidateUrl),
    companyDescription: new FormControl(''),
    jobPosition: new FormArray([]),
  })
  get jobPositionFormArray() {
    return this.form.get('jobPosition') as FormArray;
  }
  addJobPosition() {
    this.jobPositionFormArray.push(new FormGroup({
      positionName: new FormControl('',Validators.required),
      positionLevel: new FormControl(''),
      positionDescription: new FormControl(''),
      positionStartDate: new FormControl('', Validators.required),
      positionEndDate: new FormControl('', Validators.required),
    }))
  }
  removeJobPosition(i: number) {
    this.jobPositionFormArray.removeAt(i);
  }

  submit() {
    // if ( !this.form.valid ) {
    //   console.log("error")
    //   return
    // }
    console.log("submit",this.form.value)
  }

}
