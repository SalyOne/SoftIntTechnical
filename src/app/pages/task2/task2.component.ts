import {Component, inject, OnInit} from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {MovieService} from "../../core/services/movie.service";
import {JsonPipe} from "@angular/common";
import {Movie} from "../../core/interface/movie";


@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component implements OnInit {
  movieService = inject(MovieService)

  movieData!: any;

  getMovie() {
    this.movieService.get<Movie>('starwars').subscribe((data: Movie) => {
      this.movieData = data
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getMovie()
  }
}
