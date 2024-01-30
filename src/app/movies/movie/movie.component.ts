import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  data: any;
  dataArr: [];
  i: number;
  subscription: Subscription;
  onClick() {
    console.log(this.data);
  }

  ngOnInit() {}

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.data$.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
