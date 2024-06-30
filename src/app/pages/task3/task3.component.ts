import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {CustomDatePipe} from "../../core/pipes/custom-date.pipe";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [
    DatePipe,
    CustomDatePipe,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormField,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss'
})
export class Task3Component {
    value!: string;
    date:string = "2023-08-10T09:42:34.0734574"
    date2:string = "2023-06-27T14:23:00"
    date3:string = "06/27/2023 2:23 PM"
    entry:string = "hello ^_^"
}
