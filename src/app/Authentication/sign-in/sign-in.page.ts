import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form = {
    email: '',
    password: ''
  }
  
  constructor(
    private http: HttpClient,
    private api:ApiService,
    private router:Router 
   ) { 
      
   }

  ngOnInit() {
  }
  password:string = "";
  
  getPassword(Password:string){
    this.form.password = Password;
  }
 
  // onClick(){
  //   console.log(this.form.email);
  //   console.log(this.form.password);
  //   this.router.navigate(["/home"]);
    
  // }
  onLogin(){
      
    this.api.onLogin(this.form).subscribe(async (res)=>{
      
      console.log('res',res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/home']);
    })
  }

}
