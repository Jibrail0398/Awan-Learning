import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/api/teacher.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.page.html',
  styleUrls: ['./update-content.page.scss'],
})

export class UpdateContentPage implements OnInit {
 
  constructor(
    private teacher:TeacherService,
    private route:Router,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
    this.getContentCourse(this.courseID);
  }

  courseID=localStorage.getItem('data');
  contents:any;
  getContentCourse(courseID:any){
    

    this.teacher.getContentCourse(courseID).subscribe((res:any)=>{
      this.contents=res;
      console.log(this.contents);
    });
    console.log(courseID);

  }
  back(){
    localStorage.removeItem('data');  
    this.navCtrl.navigateRoot('/main');

  }

  

}
