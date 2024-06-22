  import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

  import { ApiService } from 'src/app/api/api.service';
  import { AlertController } from '@ionic/angular';
  import { LoadingController } from '@ionic/angular';


  @Component({
    selector: 'app-upload-content',
    templateUrl: './upload-content.page.html',
    styleUrls: ['./upload-content.page.scss'],
  })


  export class UploadContentPage implements OnInit {


    selectedImageName: string = '';
    selectedVideoName: string[] = [];
    
    thumbnailVideo : File | null = null;
    videoPreview : File | null = null;

    
    constructor(
      private api:ApiService,
      private alert:AlertController,
      private loading:LoadingController
    ) { 
      
    }

    ngOnInit() {
      this.getCategory()
    }

    courses = {
      title:"",
      description:"",
    }

    category_id:number[]=[];
    

    level:number=0;

    categories:any;

    getCategory(){
      this.api.getCategory().subscribe((res:any) =>{
        this.categories = res;
        console.log(res);
        
      })
    }

  

    onImageSelected(event: any) {
      this.thumbnailVideo = event.target.files[0]

      const input = event.target as HTMLInputElement;
      if (input && input.files && input.files[0]) {
        const file = input.files[0];
        this.selectedImageName = file.name;
        
      }
    }

    onVideoSelected(event:any) {
      
      this.videoPreview = event.target.files[0];
      const input = event.target as HTMLInputElement;
      if (input && input.files && input.files[0]) {
        const file = input.files[0];                    
        this.selectedVideoName.push(file.name);
    
      }
    }

    requirements: { description: string }[] = [{ description: '' }];
    price:number=0;

    addrequirement(){
      this.requirements.push({ description: '' });
    }
    removerequirement(index: number) {
      this.requirements.splice(index, 1);
    }
    async uploadTabelCourses(){
      
      const loading = await this.loading.create();
      await loading.present();
      

      this.api.uploadCourse(
        this.courses.title,
        this.courses.description,
        this.price,
        this.thumbnailVideo,
        this.videoPreview,
        this.category_id,
        this.level,
        this.requirements
        
      ).subscribe(
        {
          next: async (res) => {
            await loading.dismiss();
            const alert = await this.alert.create({
              header: 'Upload Berhasil',
              buttons: ['OK'],
              message:res.message
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
      )
    
      
    }
    

    kirim(){
    

        // this.uploadTabelCourses();
       
        this.uploadTabelCourses();
      
    }

  }
