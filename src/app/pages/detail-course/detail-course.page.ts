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
  course =new Function('return ' + this.data)();
}
