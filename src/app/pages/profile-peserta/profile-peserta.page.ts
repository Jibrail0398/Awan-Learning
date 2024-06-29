import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-peserta',
  templateUrl: './profile-peserta.page.html',
  styleUrls: ['./profile-peserta.page.scss'],
})
export class ProfilePesertaPage implements OnInit {

  constructor(
    private api:ApiService,
    private loading:LoadingController,
    private alert:AlertController,
    private route:Router
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  gender='';
  phone='';  
  

  name=localStorage.getItem('name');
  email=localStorage.getItem('email');
  

  profile:any;

    getProfile() {
      this.api.getProfile().subscribe({
        next: (res: any) => {
          this.profile = res.profile;
          this.phone = res.profile.phone;
          this.gender = res.profile.gender;
          
        },
      error: (err) => {
        // Menangani error jaringan atau server
        this.profile = "error";
        
      }
    });
  }

  async simpanProfile(){
    const confirm = await this.alert.create({
      header: 'Simpan Profil',
      message: 'Apakah ada yakin dengan isian anda?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Simpan',
          handler: async () => {
            const loading = await this.loading.create();
            await loading.present();
  
            this.api.makeProfile(
              this.phone,
              this.gender,
                     
              
            ).subscribe({
              next: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil Berhasil Disimpan',
                  buttons: ['OK'],
                });
                await alert.present();
                alert.onDidDismiss().then(() => {
                  this.route.navigate(['/account']);
                });
              },
              error: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil gagal disimpan',
                  buttons: ['OK']
                });
                console.log(res.error);
                console.log(this.gender);
                await alert.present();
              }
            });
          }
        }
      ]
    });
    await confirm.present();
  }
  async ubahProfile(){
    const profileData = {
      phone: this.phone,
      gender:this.gender
    };
    const confirm = await this.alert.create({
      header: 'Ubah Profil',
      message: 'Apakah ada yakin dengan isian anda?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Ubah',
          handler: async () => {
            const loading = await this.loading.create();
            await loading.present();
  
            this.api.updateProfile(
              profileData
              
            ).subscribe({
              next: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil Berhasil Diubah',
                  buttons: ['OK'],
                  
                });
                await alert.present();
                alert.onDidDismiss().then(() => {
                  this.route.navigate(['/account']);
                });
                
              },
              error: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil gagal diubah',
                  buttons: ['OK']
                });
                await alert.present();
                console.log(res);
                
              }
            });
          }
        }
      ]
    });
    await confirm.present();
  }


}
