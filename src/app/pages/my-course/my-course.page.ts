import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course{
  title:string;
  category:string;
  description:string;
}

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.page.html',
  styleUrls: ['./my-course.page.scss'],
})

export class MyCoursePage implements OnInit {
  
  constructor(
    private route:Router
  ) { }

  isSearchInput = false;
  isSearchFocused = false;
  // course:Course[]=[
    
  // ]
  course:Course[]=[
    {
      title:"Python Course",
      category:"IT",
      description:"Python course for Beginner"
    },
    {
      title:"English Course",
      category:"Language",
      description:"English course for Beginner"
    },
    {
      title:"Electronics Course",
      category:"Electronics and electrical",
      description:"Electronics course for Beginner"
    },
    {
      title:"Physics Course",
      category:"Physics",
      description:"Physics course for Beginner"
    },
    {
      title:"Astronomy Course",
      category:"Astronomy",
      description:"Astronomy course for Beginner"
    },
    {
      title:"Math Course",
      category:"Math",
      description:"Math course for Beginner"
    },
  ]
  ngOnInit() {
  }

  filteredItems: Course[] = this.course;

  filterItems(event: any) {
    this.isSearchInput = true;
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.course.filter(item => item.title.toLowerCase().includes(query));
    console.log(this.filteredItems);
  }
  onBlur(){
    this.isSearchInput = false;
    this.isSearchFocused = false;
  }
  onClick(){
    this.route.navigate(['content-course']);
  }



}
