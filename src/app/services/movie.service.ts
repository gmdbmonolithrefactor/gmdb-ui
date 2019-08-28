import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServices as api } from '../api-services.enum';
import { environment as env } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = env.apiUrl + api.MoviesApi;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl, httpOptions);
  }

  getOneMovie(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id, httpOptions);
  }
}
