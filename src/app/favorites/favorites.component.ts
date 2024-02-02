import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  movies = this.dataService.movies$.getValue();
  onClick() {
    console.log(this.movies);
  }
  constructor(
    private dataService: DataService,
    private activatedroute: ActivatedRoute
  ) {}
}
