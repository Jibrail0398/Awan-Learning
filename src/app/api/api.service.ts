import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) {
  }
  
  
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
  

  // onLogin(obj:any) : Observable<any>{
  //   return this.http.post("https://awan.ylladev.my.id/api/login",obj);

  // }
  onRegister(obj:any):Observable<any>{
    return this.http.post("https://awan.ylladev.my.id/api/register",obj)
  }
  getCourseData(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const options = { headers: headers };
    return this.http.get<any>("https://awan.ylladev.my.id/api/courses",options);
  }

  // getContentCourse(){
  //   return this.http.get<any>("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json",{});
  // }
  authGoogle(){
    return this.http.get<any>("https://jibrailif22a.ylladev.my.id/api/oauth/register",{});
  }

  
}
