import { TeacherService } from 'src/app/api/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';


interface Courses {
  id: number;
  title: string;
  description: string;
  image: string;
  pre_vidio: string;
  instructor_id: number;
  price: number;
  level_id: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  course:Courses[] = [];
  
  constructor(
    private router: Router,
    private teacher:TeacherService,
    private auth:AuthService
  ) {}

  ngOnInit() {
    this.getCourseUploaded();
  }
  sub = this.auth.getSub();

  toUpload() {
    this.router.navigate(['/upload-content']);
  }

  getCourseUploaded(){
    this.teacher.getCourseUploaded(this.sub).subscribe((res:any)=>{
      this.course = Object.values(res.courses).map((course: any) => ({
        id: course.id,
        title: course.title,
        description: course.description,
        image: "https://awan.ylladev.my.id/storage/" + course.image,
        pre_vidio: course.pre_vidio,
        instructor_id: course.instructor_id,
        price: course.price,
        level_id: course.level_id,
        status: course.status,
        created_at: new Date(course.created_at),
        updated_at: new Date(course.updated_at)
      }));
      
      

    });
   

  }
  getStatusText(status: string): string {
    switch (status) {
      case 'confirm':
        return 'Telah disetujui';
      case 'not_confirm':
        return 'Belum disetujui';
      default:
        return 'Unknown status';
    }
  }

  toContentCourse(id:any){
    this.router.navigate(["/update-content"]);
    localStorage.setItem("data",id);
  }
  toUploadContentCourse(id:any){
    this.router.navigate(["/upload-content-course"]);
    localStorage.setItem("data",id);
  }
 
}