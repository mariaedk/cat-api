import { Cat } from './cat.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCats(page: number): Observable<Cat[]> {
    return this.http.get(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=5`
    ) as Observable<Cat[]>;
  }

}
