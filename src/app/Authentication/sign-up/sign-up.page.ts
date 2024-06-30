import { Component, OnInit } from '@angular/core';
import { AlertController,LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/api/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})



export class SignUpPage implements OnInit {


  form = {
    username: "",
    email: "",
    password:"",
    passwordConfirm:""
  }

  
  
  getPassword(Password:any){
    this.form.password = Password;
    
  }
  getConfirmPassword(Password:any){
    this.form.passwordConfirm = Password;
    
  }

  constructor(
    private alertController: AlertController,
    private loadingController:LoadingController,
    private router:Router,
    private http: HttpClient,
    private auth:AuthService,
    private location:Location
    
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  async onClick(){
    if (this.form.password !== this.form.passwordConfirm) {
      const alert = await this.alertController.create({
        header: 'Password Tidak Sama',
        message: 'Password dan Konfirmasi password tidak sama.',
        buttons: ['OK'],
        cssClass:"custom-alert"
      });    

      await alert.present();
    }else if(this.form.password ==="" || this.form.passwordConfirm === ""){
      const alert = await this.alertController.create({
        header: 'Password Kosong',
        message: 'Password dan Konfirmasi password tidak boleh kosong.',
        buttons: ['OK'],
        cssClass:"custom-alert"
      });
      await alert.present();
        
    }else {
      return this.onRegister();
      
    }

  }
  async onRegister(){
    
    const formSubmit = {
      name: this.form.username,
      email:this.form.email,
      password:this.form.passwordConfirm,
    }
    
    const loading = await this.loadingController.create();
    await loading.present();
    this.auth.onRegister(formSubmit).subscribe(
      {
        next:async(res)=>{
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Registrasi Berhasil',
            buttons: ['OK'],
            message: "Silahkan verifikasi email anda"
          });
          await alert.present();
          this.router.navigate(['/sign-in']);
        },
        error: async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
          header: 'Registrasi Gagal',
          buttons: ['OK'],
          message:res.email
        });
          await alert.present();
        }
      }
    )
  }
  

}
