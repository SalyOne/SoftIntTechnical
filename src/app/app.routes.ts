import {Routes} from '@angular/router';
import {Task1Component} from "./pages/task1/task1.component";
import {Task2Component} from "./pages/task2/task2.component";
import {Task3Component} from "./pages/task3/task3.component";
import {Task4Component} from "./pages/task4/task4.component";
import {Task5Component} from "./pages/task5/task5.component";

export const routes: Routes = [
  {'path': '', component: Task1Component},
  {'path': 'task2', component: Task2Component},
  {'path': 'task3', component: Task3Component},
  {'path': 'task4', component: Task4Component},
  {'path': 'task5', component: Task5Component},
];
