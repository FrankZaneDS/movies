import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new Subject<void>();
  data$ = this.data.asObservable();

  setData(data) {
    this.data.next(data);
  }

  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url);
  }
}

export interface Movie {
  title: string;
}
