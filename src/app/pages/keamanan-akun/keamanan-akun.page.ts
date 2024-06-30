import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/api/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-keamanan-akun',
  templateUrl: './keamanan-akun.page.html',
  styleUrls: ['./keamanan-akun.page.scss'],
})
export class KeamananAkunPage implements OnInit {

  constructor(
    private alert:AlertController,
    private loading:LoadingController,
    private api:ApiService,
    private route:Router
  ) { }

  ngOnInit() {
  }
  oldPassword="";
  password="";
  passwordConfirm="";

  async onClick(){
    if (this.password !== this.passwordConfirm) {
      const alert = await this.alert.create({
        header: 'Password Tidak Sama',
        message: 'Password dan Konfirmasi password tidak sama.',
        buttons: ['OK'],
        cssClass:"custom-alert"
      });    

      await alert.present();
    }else if(this.password ==="" || this.passwordConfirm === ""){
      const alert = await this.alert.create({
        header: 'Password Kosong',
        message: 'Password dan Konfirmasi password tidak boleh kosong.',
        buttons: ['OK'],
        cssClass:"custom-alert"
      });
      await alert.present();
        
    }else {
      return this.resetPassword();
      
    }
  }

  async resetPassword(){
    const loading = await this.loading.create();
    await loading.present();
    this.api.changePassword(this.oldPassword,this.password).subscribe(
      {
        next:async(res)=>{
          await loading.dismiss();
          const alert = await this.alert.create({
            header: 'Password Berhasil Diubah',
            buttons: ['OK'],
          });
          await alert.present();
          this.route.navigate(['/home']);
        },
        error: async (res) => {
          await loading.dismiss();
          const alert = await this.alert.create({
          header: 'Ubah Password Gagal',
          buttons: ['OK'],
          
        });
          await alert.present();
          console.log(res.error);
        }
      }
    )
  }
}


