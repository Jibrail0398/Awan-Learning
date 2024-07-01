import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

interface Course {
  id:string;
  title: string;
  description: string;
  image: string;
  owner:string;
}

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.page.html',
  styleUrls: ['./my-course.page.scss'],
})

export class MyCoursePage implements OnInit {
  
  constructor(
    private route:Router,
    private api:ApiService
  ) { }

  isSearchInput = false;
  isSearchFocused = false;
  
  course:Course[]=[]

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.MyCourses();
    this.getinstructor();
  }
  courseId:any=[];
  MyCourses() {
    this.api.getMyCourse().subscribe(
      (response: any) => {
        if (response && response.myCourse && Array.isArray(response.myCourse)) {
          this.course = response.myCourse.map((item: any) => ({
            id: item.course.id,
            title: item.course.title,
            description: item.course.description,
            image: item.course.image
          }));
          this.courseId=response.myCourse.map((item:any) => item.course_id);
            
            
          
        }
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  instructorName:any[]=[];
  
  getinstructor() {
    for (let id of this.courseId) {
      this.api.viewCourse(id).subscribe(
        (res: any) => {
          if (res && res.course && res.course.owner) {
            const name = res.course.owner.name; // Asumsikan owner adalah objek, bukan array
            this.instructorName.push(name);
            
          }
          
        },
        (error) => {
          console.error('Error fetching course:', error);
        }
      );
    }
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
  onClick(id:any){
    localStorage.setItem("data",id);
    this.route.navigate(['content-course']);
  }
  getImageUrl(imagePath: string): string {
    return `https://awan.ylladev.my.id/storage/${imagePath}`;
  }



}
