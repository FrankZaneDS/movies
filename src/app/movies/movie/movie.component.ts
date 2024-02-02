import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, Movie } from '../../data.service';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivationStart,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs-compat';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  getMovie = this.dataService.getFavorites;
  movies$ = this.dataService.movies$;
  data = this.dataService.data$.getValue();
  disabled = this.deleteButton();
  movieList$ = new BehaviorSubject<Movie[]>([]);
  listOfMovies = this.movieList$.getValue();
  @Input() i: number;
  // subscription: Subscription;
  onClick() {
    console.log(this.movies$);
  }

  deleteButton() {
    const path = +this.activatedRoute.snapshot.params['id'];
    if (!path) {
      console.log('true');
      return true;
    } else console.log('false');
    return false;
  }
  ngOnInit() {}
  getMovieList() {
    const path = +this.activatedRoute.snapshot.params['id'];
    if (!path) {
      console.log('cll');
      return this.data;
    } else console.log('radi');
    return this.movies$;
  }

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.subscription = this.dataService.data$.subscribe((data) => {
    //    this.data = data;
    //  });
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.getMovieList();
      }
    });
  }

  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }
}
