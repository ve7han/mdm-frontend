import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_API, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, { username, password }, httpOptions);
  }
}
