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

  constructor(private http: HttpClient) {
    this.all().subscribe(data => {
      this.movies = data;
    });
  }

  all(): Observable<any> {
    return this.http.get(this.apiUrl + '?search=', httpOptions);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id, httpOptions);
  }

  search(query) {
    const results = this.movies.filter((movie) => movie.title.toLowerCase().includes(query));
    return of(results);
  }
}
