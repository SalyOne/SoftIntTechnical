import {AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, ViewChild} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "../../core/services/movie.service";
import {JsonPipe} from "@angular/common";
import {Movie, Result} from "../../core/interface/movie";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    JsonPipe,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormField,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component implements OnInit {
  movieService = inject(MovieService)
  loading: boolean = false;

  movieData!: any;
  displayedColumns: string[] = ['name', 'type', 'year', 'image'];
  dataSource = new MatTableDataSource<Movie>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  value: any;

  getMovieWithTitle(title?: string) {
    this.loading = true
    this.movieService.get<Movie>(title).subscribe((data: Movie) => {
      this.movieData = data.results
      this.loading = false
      this.dataSource = new MatTableDataSource<Movie>(this.movieData);
      this.dataSource.paginator = this.paginator;
    })
  }
  ngOnInit() {
    this.loading = true
    this.getMovieWithTitle()
    this.dataSource.paginator = this.paginator;
  }

}

