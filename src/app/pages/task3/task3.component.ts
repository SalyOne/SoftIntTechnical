import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {CustomDatePipe} from "../../core/pipes/custom-date.pipe";

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [
    DatePipe,
    CustomDatePipe
  ],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss'
})
export class Task3Component {
    date:string = "2023-08-10T09:42:34.0734574Z"
    date2:string = "2023-06-27T14:23:00Z"
    date3:string = "06/27/2023 2:23 PM"
    string:string = "hello ^_^"
    num:string = "123456789 68462"
}
