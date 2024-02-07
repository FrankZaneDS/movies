import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  searchText$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchText = this.searchText$.asObservable();
  setData(data: Movie[]) {
    this.data$.next(data);
  }

  getFavorites(movie: Movie) {
    this.movies$.next([...this.movies$.getValue(), movie]);
  }

  constructor() {}
}

export interface Movie {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}
