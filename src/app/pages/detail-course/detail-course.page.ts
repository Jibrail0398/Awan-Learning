import { Component, OnInit,OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit,OnDestroy {

  
  constructor(
    private api:ApiService
  ) { }

  ngOnInit() {
    this.getDetailCourse();
  }
  ngOnDestroy(){
    localStorage.removeItem("data");
  }

  vidioDomain:any;
  imageDomain:any;
  detailCourse:any;
  getDetailCourse(){
    const CourseId = localStorage.getItem('data');
    this.api.getDetailCourse(CourseId).subscribe((res:any) =>{
      this.detailCourse = res['course'];
      console.log(this.detailCourse);
      this.vidioDomain = "https://awan.ylladev.my.id/storage/"+res.course.pre_vidio;
      this.imageDomain = "https://awan.ylladev.my.id/storage/"+res.course.image;
    });
    
    
    
    
  }
  
  data = localStorage.getItem("data");
  rating:number = 4.5;
  course =new Function('return ' + this.data)();

  convertrRupiah(price:number){
    
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }
  coursePrice = this.convertrRupiah(500000);

}
