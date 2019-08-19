import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('/movie-svc/GMDB-MOVIES/gmdb/api/movies/?search=');
  }

  getOneMovie(id: number) {
    return this.http.get('/movie-svc/GMDB-MOVIES/gmdb/api/movies/' + id);
  }

}
