import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule],
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent  implements OnInit {

  constructor(
    private auth:AuthService,
    private loading:LoadingController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  email="";
  isOpen=false;

  open(){
    this.isOpen=true;
    
  }
  cancel(){
    this.isOpen=false;
    
  }
  async kirim(){
    const loading = await this.loading.create();
    await loading.present();
    this.auth.forgotPassword(this.email).subscribe(
      {
        next: async (res) => {
          await loading.dismiss();
          const alert = await this.alert.create({
            header: 'Reset Password Berhasil',
            buttons: ['OK'],
            message: 'Silahkan Cek Email Anda',
          });
          await alert.present();
          this.isOpen=false;
        },
        error: async (res) => {
            await loading.dismiss();
            const alert = await this.alert.create({
            header: 'Reset Password Gagal',
            message: res.error.message,
            buttons: ['OK'],
            
            });
            await alert.present();
            console.log(res.error);
        }
      }

    )  

    
  }
}
