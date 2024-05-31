import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
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
    private api:ApiService,
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
    this.api.onLogin(this.form).subscribe(
      {
        next: async (res) => {
          localStorage.setItem('token',res.token);
          await loading.dismiss();
          const alert = await this.alert.create({
            header: 'Login Berhasil',
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigate(['/home']);
        },
        error: async (res) => {
            await loading.dismiss();
            const alert = await this.alert.create({
            header: 'Login Gagal',
            buttons: ['OK'],
            
            });
            await alert.present();
        }
      }
    )

    
  }

}
