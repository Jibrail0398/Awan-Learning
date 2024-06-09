import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';


interface Course{
  id:number;
  name:string;
  Description:Text;
  category_id:number;
  rating:number;
  price:number;
  deleted_at:Date;
  created_at:Date;
  updated_at:Date;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isSearchFocused = false;
  isDataFiltered = false;

  constructor(
    private http:HttpClient,
    private api:ApiService,
    private router:Router
  ) { }
  ngOnInit() {
    this.getCourseData()
  }

 
  listCourse: Course[] = [];
  filteredData: any[] = [];

  getCourseData(){
    this.api.getCourseData().subscribe((data:any) =>{
      this.listCourse = data['data'];
      this.filteredData = this.listCourse; 
    })
  }

  // data = [
  //   { title: 'Web Programming', description: 'Deskripsi card 1' },
  //   { title: 'Data Science', description: 'Deskripsi card 2' },
  //   { title: 'Bahasa Inggris', description: 'Deskripsi card 3' },
  //   { title: 'Matematika', description: 'Deskripsi card 4' },
  //   { title: 'Fisika Quantum', description: 'Deskripsi card 4' },
  //   { title: 'Teknik Nuklir', description: 'Deskripsi card 4' },
  //   { title: 'Biology', description: 'Deskripsi card 4' },
  // ];
  
  // filteredData = this.data;

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
  onFocus() {
    this.isSearchFocused = true;

  }
  onBlur(){
    this.isSearchFocused = false;
    this.isDataFiltered = false;
    this.filteredData = this.listCourse;
  }
  onInput(event:any){
    const query = event.target.value.toLowerCase();
    this.filteredData = this.listCourse.filter(listCourse => listCourse.name.toLowerCase().includes(query));
    this.isDataFiltered = true;
    

  }
  
  
  getDetailCourse(id:number){
    const data = this.listCourse.find(listCourse =>listCourse.id==id);
    localStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["\detail-course"])
    
  }

}
