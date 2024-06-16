import { Component, OnInit } from '@angular/core';
import { VgApiService, VgMediaDirective } from '@videogular/ngx-videogular/core';


@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {

  
  constructor() { }

  ngOnInit() {
    
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
