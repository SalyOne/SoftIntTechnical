import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [],
  templateUrl: './task4.component.html',
  styleUrl: './task4.component.scss'
})
export class Task4Component implements OnInit {

  holidays=[2,10,12,21,27,31]
  weeks: (number | null)[][] = [];
  now: Date = new Date();
  totalAmountOfWeeks!:number
  currentMonth: string = this.now.toLocaleString('default', {month: 'long'});
  currentYear: number = this.now.getFullYear();
  currentDay:number = this.now.getDate()

  firstDayOfMonth = new Date(this.currentYear, this.now.getMonth(), 1);
  firstDayOfWeek = this.firstDayOfMonth.getDay();

  lastDayOfMonth = new Date(this.currentYear, this.now.getMonth() +1, 0);
  lastDate = this.lastDayOfMonth.getDate();

  lastDayOfPrevMonth = new Date(this.currentYear, this.now.getMonth() , 0)
  lastDateOfLastMonth = this.lastDayOfPrevMonth.getDate()


  firstDayOfNextMonth = new Date(this.currentYear, this.now.getMonth() +1, 1);
  firstWeekDayOfNextMonth = this.firstDayOfNextMonth.getDay()

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    let week: (number | null)[] = new Array(7).fill(null);
    if (this.firstDayOfWeek != 0) {
      for (let i = 0; i < this.firstDayOfWeek; i++) {
        week[i] = this.lastDateOfLastMonth - (this.firstDayOfWeek - i - 1)
      }
    }

    let day = 1;

    for (let i = this.firstDayOfWeek; i < 7; i++) {
      week[i] = day++;
    }

    this.weeks.push(week);

    while (day <= this.lastDate) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && day <= this.lastDate; i++) {
        week[i] = day++;
      }
      this.weeks.push(week);
    }

    let dayCounter = 0
    if (this.lastDayOfMonth.getDay() != 6) {
      for (let i = this.firstWeekDayOfNextMonth; i < 7; i++) {
        week[i] = this.firstDayOfNextMonth.getDate() + dayCounter;
        dayCounter++;
      }
    }
    this.totalAmountOfWeeks = this.weeks.length-1
  }
}
