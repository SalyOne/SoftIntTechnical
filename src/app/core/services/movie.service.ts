import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../interface/movie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() { }

  get<T>(title: string): Observable<T>{
   return this.http.get<T>(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}`)
  }
}
