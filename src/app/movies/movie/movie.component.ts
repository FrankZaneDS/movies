import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, Movie } from '../../data.service';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivationStart,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  getMovie = this.dataService.getFavorites;
  movies$ = this.dataService.movies$;
  @Input() i: number;
  @Input() data: Movie;
  @Input() isDisabled: boolean;
  @Input() url: 'favorites' | 'movies';
  // subscription: Subscription;
  onClick() {
    console.log(this.movies$);
  }

  ngOnInit() {
  }

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }
}
