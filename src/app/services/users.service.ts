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

  getAllUsers() {
    return this.http.get('/user-svc/GMDB-USERS/gmdb/api/users/all');
  }

  getUser(id: number) {
    return this.http.get('/user-svc/GMDB-USERS/gmdb/api/users/' + id);
  }

  validateUser(email: string, password: string){
    return this.http.get('/user-svc/GMDB-USERS/gmdb/api/users/?email=' + email + '&pwd=' + password);
  }

}
