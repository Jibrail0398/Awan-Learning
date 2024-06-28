import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient,
    private auth:AuthService,
    private storage:StorageService
  ) {
  }
  
  
  token = this.auth.getBearerToken();


  //Home
  getCourseData(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    
    return this.http.get<any>(environment.urlDomain+"/courses",{ headers: headers });
  }

  //upload Course

  uploadCourse(
    title: string,
    description: string,
    price: number,
    image:File|null,
    pre_vidio:File|null,
    category_ids: number[],
    level_id: any,
    requirements: { description: string }[]
    
  ){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
  });

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price.toString());
  // Append image and vidio file
  if (image && pre_vidio) {
    formData.append('image', image, image.name);
    formData.append('pre_vidio', pre_vidio, pre_vidio.name);
  }
  // Append category_ids
  category_ids.forEach(id => {
    formData.append('category_ids[]', id.toString());
  });
  
  formData.append('level_id', level_id.toString());

   requirements.forEach((req, index) => {
    formData.append(`requirements[${index}][description]`, req.description);
  });
  
  return this.http.post<any>(environment.urlDomain + "/courses", formData, { headers: headers });
  }

  //uploadCourseContent

  uploadCourseContent(
    id:number,
    title:string,
    description:string,
    vidioURL:File|null,
  ){
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
  });
    
    
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('description', description);

    if (vidioURL) {
      formData.append('vidioURL', vidioURL, vidioURL.name);

  }
  return this.http.post<any>(environment.urlDomain + '/courses/'+id+'/contents', formData, { headers: headers }); 

  }
 
 
  //Categories
  getCategory(){
    const headers = new HttpHeaders().set(
      "Authorization",
      // this.storage.decrypt(this.token)
      this.token
    );
    const options = { headers: headers };
    return this.http.get(environment.urlDomain+"/categories", options);
  }

  getDetailCourse(id:any){
    const headers = new HttpHeaders().set(
      "Authorization",
      // this.storage.decrypt(this.token)
      this.token
    );
    const options = { headers: headers };
    return this.http.get(environment.urlDomain+"/courses/"+id, options);
  }

    
}
