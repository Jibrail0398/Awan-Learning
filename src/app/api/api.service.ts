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
  getCourseData(){
    return this.http.get<any>("https://awan.ylladev.my.id/api/course",{});
  }

  getContentCourse(){
    return this.http.get<any>("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json",{});
  }

}
