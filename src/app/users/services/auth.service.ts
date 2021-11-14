import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Register } from '../models/register';

const headerOptions = {headers:new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api/users/';
  constructor(private httpClient: HttpClient) { }

  registerUser(register: Register): Observable<any> {
    return this.httpClient.post(this.url+'register', JSON.stringify(register));
  }
  loginUser(login: any): Observable<any> {
    return this.httpClient.post(this.url+'login',login);
  }
}