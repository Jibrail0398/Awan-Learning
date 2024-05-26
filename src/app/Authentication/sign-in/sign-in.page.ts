import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';


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
    private router:Router,
    private alert:AlertController ,
    private location:Location
   ) { 
      
   }

  ngOnInit() {
  }
  password:string = "";
  
  getPassword(Password:string){
    this.form.password = Password;
  }
 
  goBack(){
    this.location.back();
  }
  onLogin(){
      
    this.api.onLogin(this.form).subscribe(async(res)=>{
        if(res){
          console.log('res',res);
          localStorage.setItem('token',res.token);
          const alert = await this.alert.create({
            header: 'Login Berhasil',
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigate(['/home']);
        }
      },
    )
  }

}
