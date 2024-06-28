import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-content-course',
  templateUrl: './upload-content-course.page.html',
  styleUrls: ['./upload-content-course.page.scss'],
})
export class UploadContentCoursePage implements OnInit {

   
  selectedVideoName: string[] = [];

  id: any = localStorage.getItem("data");
  inputs: { title: string; description: string; video: File | null }[] = [{
    
    title: '',
    description: '',
    video: null
  }];

  

  constructor(
    private api: ApiService,
    private alert: AlertController,
    private loading: LoadingController,
    private route:Router
  ) {}

  ngOnInit() {
    
  }

  onVideoSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      this.inputs[index].video = file;
      this.selectedVideoName[index] = file.name;
    }
  }

  addInput() {
    this.inputs.push({ title: '', description: '', video: null });
    this.selectedVideoName.push('');
  }

  removeInput(index: number) {
    this.inputs.splice(index, 1);
    this.selectedVideoName.splice(index, 1);
  }

  async uploadAllContents(id:any){
    const loading = await this.loading.create();
    await loading.present();  
    this.inputs.forEach(input => {
      this.api.uploadCourseContent(id, input.title, input.description, input.video)
        .subscribe(
          {
            next: async (res) => {
              await loading.dismiss();
              const alert = await this.alert.create({
                header: 'Upload Berhasil',
                buttons: ['OK'],
              });
              await alert.present();
              
            },
            error: async (res) => {
                await loading.dismiss();
                const alert = await this.alert.create({
                header: 'Upload Gagal',
                message: res.message,
                buttons: ['OK'],
                
                });
                await alert.present();
            }
          }
          
        );

    
    });
    
  }

  kirim() {
    
    
    this.uploadAllContents(this.id);
    this.route.navigate(["/main"]);
    
    
    
  }
  kembali(){
    this.route.navigate(["/main"]);
  }

}
