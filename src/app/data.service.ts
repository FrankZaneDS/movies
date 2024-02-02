import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
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
  }

  constructor(private http: HttpClient) {}
  getData(): Observable<Movie[]> {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Movie[]>(url);
  }
}

export interface Movie {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}
