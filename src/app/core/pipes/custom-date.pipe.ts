import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {
  isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }
  convertToCustomFormat(dateString: string): string {
    const date = new Date(dateString);

    const day = this.padZero(date.getDate());
    const month = this.padZero(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();
    const hours = this.padZero(date.getUTCHours());
    const minutes = this.padZero(date.getUTCMinutes());
    const seconds = this.padZero(date.getUTCSeconds());

    return `${hours}:${minutes}:${seconds} ${month} ${day} ${year} `;
  }
  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
  transform(value: string, ...args: unknown[]): unknown {
    if(!this.isValidDate(value)){
      return value
    }
    const formattedDate = this.convertToCustomFormat(value);
    return formattedDate
  }

}
