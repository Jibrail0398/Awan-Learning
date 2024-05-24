import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
    
  ) { }

  ngOnInit() {
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
    }else {
      
      console.log(this.form.username);
      console.log(this.form.email);
      console.log(this.form.password);
      console.log(this.form.passwordConfirm);
      
    }

  }
  

}
