import { EnvironmentProviders, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(
    private http:HttpClient,
    private storage:StorageService
  ) { }
  
  bearerToken=localStorage.getItem('token');
  
  
  onLogin(obj:any) : Observable<any>{
    return this.http.post(environment.urlDomain+"/login",obj);
  }
  onRegister(obj:any):Observable<any>{
    return this.http.post(environment.urlDomain+"/register",obj)
  }
  // onLogin(obj:any) : Observable<any>{
  //   return this.http.post("https://jibrailif22a.ylladev.my.id/api/login",obj);
  // }

  getBearerToken(): any {
    return this.bearerToken;
  }
}
