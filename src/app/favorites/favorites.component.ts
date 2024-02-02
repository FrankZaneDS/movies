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
  favorites$ = this.dataService.movies$;
  onClick() {
  }
  constructor(
    private dataService: DataService,
    private activatedroute: ActivatedRoute
  ) {}
}
