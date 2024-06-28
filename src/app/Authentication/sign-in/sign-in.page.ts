import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { AlertController,LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
// import { StorageService } from 'src/app/api/storage.service';



// import { ApiService } from 'src/app/api/api.service';


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
    // private router:Router,
    private alert:AlertController ,
    private location:Location,
    private loadingController:LoadingController, 
    private navCtrl: NavController
    // private storage:StorageService
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
          // this.storage.saveData('token',res.token)
          localStorage.setItem('token',res.token);
          localStorage.setItem('sub',res.sub);
          this.navCtrl.navigateRoot('/home');
          
        },
        error: async (res) => {
            await loading.dismiss();
            const alert = await this.alert.create({
            header: 'Login Gagal',
            message: res.message,
            buttons: ['OK'],
            
            });
            await alert.present();
        }
      }

    )
    
    

  }
}
