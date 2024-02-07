import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, Movie } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  getMovie = this.dataService.getFavorites;
  movies$ = this.dataService.movies$;
  @Input() i: any;
  @Input() data: any;
  @Input() isDisabled: any;
  @Input() isFavorite: any;
  // subscription: Subscription;
  onClick() {
    let movies = this.movies$.getValue();
    movies.splice(this.i, 1);
    this.movies$.next(movies);
  }

  ngOnInit() {}

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }
}
