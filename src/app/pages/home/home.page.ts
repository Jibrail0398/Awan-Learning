import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api/api.service';

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
    private api:ApiService
  ) { }
  ngOnInit() {
  }

  listCourse:any;
  getCourseData(){
    this.api.getCourseData().subscribe((data:any) =>{
      this.listCourse = data['data'];
      console.log(this.listCourse);
    })
  }
  data = [
    { title: 'Web Programming', description: 'Deskripsi card 1' },
    { title: 'Data Science', description: 'Deskripsi card 2' },
    { title: 'Bahasa Inggris', description: 'Deskripsi card 3' },
    { title: 'Matematika', description: 'Deskripsi card 4' },
    { title: 'Fisika Quantum', description: 'Deskripsi card 4' },
    { title: 'Teknik Nuklir', description: 'Deskripsi card 4' },
    { title: 'Biology', description: 'Deskripsi card 4' },
  ];
  
  filteredData = this.data;

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
    this.filteredData = this.data;
  }
  onInput(event:any){
    const query = event.target.value.toLowerCase();
    this.filteredData = this.data.filter(data => data.title.toLowerCase().includes(query));
    this.isDataFiltered = true;
    console.log(this.filteredData);
    console.log(this.filteredData.length);

  }
 
  

}
