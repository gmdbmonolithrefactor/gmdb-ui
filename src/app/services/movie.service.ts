import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiServices as api } from '../utils/api-services.enum';
import { environment as env } from '../../environments/environment';
import { Movie } from '../models/movie';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[];
  private apiUrl = env.apiUrl + api.MoviesApi;

  constructor(private http: HttpClient) { }

  all(): Observable<any> {
    return this.http.get(this.apiUrl + '?search=', httpOptions);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id, httpOptions);
  }

  search(query) {
    // TODO: create filter for movie search
    this.all().subscribe(data => {
      this.movies = data;
    });
    const fake = [this.movies[3]];
    return of(fake);
  }
}
