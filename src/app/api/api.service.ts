import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  //Get Profile
  getProfile(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(environment.urlDomain+"/profile",{headers:headers});
  }

  
  makeProfile(
    phone:string,
    gender?:string,
    address?: string,
    city?:string,
    state?:string,
    country?:string,
    zipcode?:string,
  ){

    const formData = new FormData();
    formData.append('phone',phone);

    if(address){
      formData.append('address',address);
    }
    if(gender){
      formData.append('gender',gender);
    }
    if(city){
      formData.append('city',city);
    }
    if(state){  
      formData.append('state',state);
    }
    if(country){
      formData.append('country',country);
    }
    if(zipcode){
      formData.append('zipcode',zipcode);
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(environment.urlDomain+"/profile",formData,{headers:headers});
  }

  updateProfile(
    data:any
  ){
        
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put(environment.urlDomain+"/profile",data,{headers:headers});
  }

  changePassword(oldPassword:string,newPassword:string){

    const formData = new FormData();
    formData.append('oldPassword',oldPassword);
    formData.append('newPassword',newPassword);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(environment.urlDomain+"/reset/password",formData,{headers:headers});
  }

  //wishlist
  getWishlist(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(environment.urlDomain+"/wishlist",{headers:headers});
  }

  addWishlist(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(environment.urlDomain + "/wishlist/" + id + "/add", {}, {headers:headers});
  }

  removewishlist(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete(environment.urlDomain + "/wishlist/" + id + "/remove",{headers:headers});
  }

  //cart
  getCart(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(environment.urlDomain+"/cart",{headers:headers});
  }

  addCart(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(environment.urlDomain + "/cart/" + id + "/add", {}, {headers:headers});
  }

  removeCart(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete(environment.urlDomain + "/cart-items/" + id,{headers:headers});
  }

  //Transaction
  createTransaction(){
    return this
  }


    
}
