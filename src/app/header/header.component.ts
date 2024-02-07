import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  filterStatus = '';
  searchText$ = this.dataService.searchText$;
  onClick() {
    setTimeout(() => {
      console.log(this.filterStatus);
      this.searchText$.next(this.filterStatus);
    }, 2000);
  }
  constructor(private dataService: DataService) {}
}
