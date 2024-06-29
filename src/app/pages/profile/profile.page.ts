import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private api:ApiService,
    private alert:AlertController,
    private loading:LoadingController,
    private route:Router
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  name=localStorage.getItem('name');
  email = localStorage.getItem('email');
  gender:any;
  phone:any;
  address:any;
  city:any;
  state:any;
  zipcode:any;
  

  profile:any;

    getProfile() {
      this.api.getProfile().subscribe({
        next: (res: any) => {
          this.profile = res.profile;
          this.phone = res.profile.phone;
          this.address = res.profile.address;
          this.gender = res.profile.gender;
          this.city = res.profile.city;
          this.state = res.profile.state;
          this.zipcode = res.profile.zipcode;          
          
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
              this.address,
              this.city,
              this.state,
              "indonesia",
              this.zipcode,
            ).subscribe({
              next: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil Berhasil Disimpan',
                  buttons: ['OK'],
                  
                });
                await alert.present();
                alert.onDidDismiss().then(() => {
                  this.route.navigate(['/teacher-account']);
                });
              },
              error: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Profil gagal disimpan',
                  buttons: ['OK'],
                  message:res.error
                });
                await alert.present();
                console.log(res.error);
                
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
      address: this.address,
      gender:this.gender,
      city: this.city,
      state:this.state,
      country: "indonesia",
      zipcode:this.zipcode,
    };
    console.log(profileData);
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
                  this.route.navigate(['/teacher-account']);
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
