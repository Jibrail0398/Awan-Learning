import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { StorageService } from 'src/app/api/storage.service';



interface Course {
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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isSearchFocused = false;
  isDataFiltered = false;

  category:any;

  constructor(
    private http:HttpClient,
    private api:ApiService,
    private router:Router,
    private auth:AuthService,
    private storage:StorageService
  ) { }
  ngOnInit() {
    
    this.getCourseData();
  }

  myname = localStorage.getItem("name");
  listCourse: Course[] = [];
  filteredData: any[] = [];
  
  token = this.auth.getBearerToken();
  
  
  getCourseData(){
    this.api.getCourseData().subscribe((res:any) =>{

      if (res.course) {
        this.listCourse = Object.values(res.course).map((course: any) => ({
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
        this.filteredData = this.listCourse; 
      } else {
        console.error('res.course is null or undefined');
      }
      this.filteredData = this.listCourse; 
      
    })
  }
  
  getCategory(){
    this.api.getCategory().subscribe((res:any) =>{
      this.category = res;
    })
  }

  
  myswiper:any;
  swiperInit(event: any) {
    this.myswiper = event.target;
    this.myswiper.loop = true;  
    this.myswiper.breakpoints = {
      300:{
        slidesPerView:2
      },
      800: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      }
    }
  
  }
  convertrRupiah(price:number){
    
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }
  onFocus() {
    this.isSearchFocused = true;

  }
  onBlur(){
    setTimeout(() => {
      
      this.isSearchFocused = false;
      this.isDataFiltered = false;
      this.filteredData = this.listCourse;
    }, 200); 
  }
  onInput(event:any){
    const query = event.target.value.toLowerCase();
    this.filteredData = this.listCourse.filter(listCourse => listCourse.title.toLowerCase().includes(query));
    this.isDataFiltered = true;
  }
  resultfilter(id:any){
    localStorage.setItem("data",id);
    this.router.navigate(["detail-course"]);
  }
  
  getDetailCourse(id:any){
    localStorage.setItem('data',id);    
    this.router.navigate(["\detail-course"]);
        
  }

}
