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
    return this.http.post("https://jibrailif22a.ylladev.my.id/api/login",obj);

  }
  // onLogin(obj:any) : Observable<any>{
  //   return this.http.post("https://jibrailif22a.ylladev.my.id/api/login",obj);

  // }

}
