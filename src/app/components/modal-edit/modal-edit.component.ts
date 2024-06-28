import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeacherService } from 'src/app/api/teacher.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule],
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent  implements OnInit {


  videoFile:  File | null = null;

  onVideoSelected(event:any) {
    this.videoFile = event.target.files[0];
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];                    
    }
  }

  isOpen=false;
  constructor(
    private teacher:TeacherService,
    private router:Router,
    private loading:LoadingController,
    private alert:AlertController,
    private route:Router,
  
  ) { }

  ngOnInit() {
    
  }

  open(id:any){
    this.isOpen=true;
    localStorage.setItem("content_data",id);
    this.content_data=id;
    
  }
  cancel(){
    this.isOpen=false;
    localStorage.removeItem("content_data");
  }

  data=localStorage.getItem("data");
  content_data:any;
  title="";
  description="";
  
  async ubah(){

    const confirm = await this.alert.create({
      header: 'Konfirmasi Update',
      message: 'Apakah Anda yakin ingin mengupdate konten ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: async () => {
            const loading = await this.loading.create();
            await loading.present();

            this.teacher.uploadCourse(
              this.data,
              this.content_data,
              this.title,
              this.description,
              this.videoFile

            ).subscribe({
              next: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Update Berhasil',
                  buttons: ['OK'],
                  message: "Kursus Berhasil diubah",
                  
                });
                await alert.present();
                await alert.onDidDismiss();
                window.location.reload();
                localStorage.removeItem('content_data');
                this.isOpen=false;
                
              },
              error: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                  header: 'Update Gagal',
                  message: res.message,
                  buttons: ['OK']
                });
                await alert.present();
              }
            });
          }
        }
      ]
    });
    await confirm.present();

  }
}
