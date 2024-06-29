import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "../../core/services/movie.service";
import {Movie} from "../../core/interface/movie";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormField,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component implements OnInit ,OnDestroy{
  movieService = inject(MovieService)
  sub$ = new Subject();
  loading: boolean = false;
  movieData!: any;
  isValueSubmitted:boolean = false
  displayedColumns: string[] = ['name', 'type', 'year', 'image'];
  dataSource = new MatTableDataSource<Movie>();
  value: any;

  getMovieWithTitle(title?: string) {
    this.loading = true
    if (title){
      this.isValueSubmitted = true
    }else{
      title = "starwars"
    }
    this.movieService.get<Movie>(title)
      .pipe(takeUntil(this.sub$))
      .subscribe((data: Movie) => {
      if (data){
        this.movieData = data.results
        this.dataSource = new MatTableDataSource<Movie>(this.movieData  );
        this.loading = false
      }
    })
  }
  ngOnInit() {
    this.loading = true
    this.getMovieWithTitle()
  }
  clear(){
    this.value="";
    this.isValueSubmitted = false
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}

