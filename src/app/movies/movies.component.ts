import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  data: any;
  index = 0;
  sendData() {
    this.dataService.setData(this.data);
  }
  ngOnInit() {
    this.sendData();
  }

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      console.warn(data);
      this.data = data;
    });
  }
}
