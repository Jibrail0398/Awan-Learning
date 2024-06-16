import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { AlertController,LoadingController } from '@ionic/angular';
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
    private auth:AuthService,
    private router:Router,
    private alert:AlertController ,
    private location:Location,
    private loadingController:LoadingController 
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
  async onLogin(){   
    const loading = await this.loadingController.create();
    await loading.present();
    this.auth.onLogin(this.form).subscribe(
      {
        next: async (res) => {
          await loading.dismiss();
          const alert = await this.alert.create({
            header: 'Login Berhasil',
            buttons: ['OK'],
          });
          await alert.present();
          this.auth.setBearerToken(res.access_token);
          this.router.navigate(['/home']);
        },
        error: async (res) => {
            await loading.dismiss();
            const errorMessage = res.error?res.error.error:"UknownError";
            const alert = await this.alert.create({
            header: 'Login Gagal',
            message: errorMessage,
            buttons: ['OK'],
            
            });
            await alert.present();
        }
      }

    )
    
    

  }
}
