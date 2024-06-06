import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
  }
  

  onLogin(obj:any) : Observable<any>{
    return this.http.post("https://awan.ylladev.my.id/api/login",obj);

  }
  onRegister(obj:any):Observable<any>{
    return this.http.post("https://awan.ylladev.my.id/api/register",obj)
  }

}
