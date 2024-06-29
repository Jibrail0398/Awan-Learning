import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private auth:AuthService,
    private http:HttpClient
  ) { }

  token = this.auth.getBearerToken();

  getCourseUploaded(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(environment.urlDomain+"/courses/instructor/" + id ,{ headers: headers });
  }

  getContentCourse(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    
    return this.http.get<any>(environment.urlDomain+"/courses/" + id+"/contents" ,{ headers: headers });
  }

  

  uploadCourse(
    courseId: any,
    id: any,
    title: string,
    description: string,
    videoURL: File | null,
  ) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
  });

  const formData = new FormData();
  if (title) formData.append('title', title);
  if (description) formData.append('description', description);
  if (videoURL) formData.append('vidioURL', videoURL);
 
  
    return this.http.post<any>(
      `${environment.urlDomain}/courses/${courseId}/contents/${id}`,
      formData,
      { headers: headers }
    );
  }


}
