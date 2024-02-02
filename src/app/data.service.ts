import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs-compat';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  setData(data) {
    this.data$.next(data);
  }

  getFavorites(movie: Movie) {
    this.movies$.next([...this.movies$.getValue(), movie]);
    console.log(this.movies$);
  }

  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url);
  }
}

export interface Movie {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}
