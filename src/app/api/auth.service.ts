import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  link = "https://awan.ylladev.my.id/api/";
  constructor(
    private http:HttpClient,
  ) { }
  
  bearerToken="";
  
  onLogin(obj:any) : Observable<any>{
    return this.http.post(`${this.link}login`,obj);
  }

  setBearerToken(token: string) {
    this.bearerToken = token;
  }

  getBearerToken(): string {
    return this.bearerToken;
  }
}
