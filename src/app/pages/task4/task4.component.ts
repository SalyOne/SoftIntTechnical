import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [],
  templateUrl: './task4.component.html',
  styleUrl: './task4.component.scss'
})
export class Task4Component implements OnInit{



  weeks: (number | null)[][] = [];
  now:Date = new Date();
  currentMonth: string = this.now.toLocaleString('default', { month: 'long' });
  currentYear: number= this.now.getFullYear();

  firstDayOfMonth = new Date(this.currentYear, this.now.getMonth(), 1);
  lastDayOfMonth = new Date(this.currentYear, this.now.getMonth() + 1, 0);
  lastDayOfPrevMonth = new Date(this.currentYear, this.now.getMonth() , 0)
  firstDayOfNextMonth = new Date(this.currentYear, this.now.getMonth()+1, 1);

  firstDayOfWeek = this.firstDayOfMonth.getDay();
  lastDate = this.lastDayOfMonth.getDate();
  lastDateOfLastMonth =  this.lastDayOfPrevMonth.getDate()
  firstDateOfNextMonth =  this.firstDayOfNextMonth.getDate()

  ngOnInit() {
    this.generateCalendar();
    console.log(this.firstDayOfNextMonth)
    console.log(this.firstDateOfNextMonth)
  }

  generateCalendar() {
    console.log("day", this.firstDayOfWeek)


    let week: (number | null)[] = new Array(7).fill(null);

    if (this.firstDayOfWeek != 0) {
      for (let i = 0; i < this.firstDayOfWeek; i++) {
          week[i]=this.lastDateOfLastMonth-(this.firstDayOfWeek-i-1)
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

    while (this.weeks.length < 6) {
      this.weeks.push(new Array(7).fill(null));
    }


    if (this.lastDate != 0) {
      for (let i = this.firstDateOfNextMonth; i <7 ; i++) {
        week[i]=this.firstDateOfNextMonth+i-1
      }
    }
  }

}
