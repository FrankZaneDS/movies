import { Component, Input } from '@angular/core';
import { DataService, Movie } from '../data.service';
import { Observable, Subject, filter, take } from 'rxjs';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies$: any;

  filterString = '';

  getData(): Observable<Movie[]> {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Movie[]>(url);
  }

  ngOnInit() {
    this.movies$ = this.getData().pipe(take(1));

    this.dataService.searchText.subscribe(
      (filterString) => (this.filterString = filterString)
    );
  }

  constructor(private dataService: DataService, private http: HttpClient) {}
}
