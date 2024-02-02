import { Component } from '@angular/core';
import { DataService, Movie } from '../data.service';
import { Observable, Subject, take } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isDisabled: true;

  // sendData() {
  //   this.dataService.setData(this.data);
  // }
  ngOnInit() {
    this.movies$ = this.dataService.getData().pipe(take(1));
    // this.sendData();
  }

  constructor(private dataService: DataService) {}
}
