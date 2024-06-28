import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-task5',
  standalone: true,
  imports: [
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './task5.component.html',
  styleUrl: './task5.component.scss'
})
export class Task5Component {
  value1: string = '';
  value2: string = '';
  value2Array!: string[];

  splitString(initialString: string): void {
    this.value2Array = initialString.split(';').map(item => item.trim());
  }

  levenshteinDistance(a: string, b: string): number {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  similarityPercentage(a: string, b: string): number {
    const distance = this.levenshteinDistance(a, b);
    const maxLength = Math.max(a.length, b.length);
    return ((maxLength - distance) / maxLength) * 100;
  }

}
