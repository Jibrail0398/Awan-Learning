// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-main',
// //   templateUrl: './main.page.html',
// //   styleUrls: ['./main.page.scss'],
// // })
// // export class MainPage implements OnInit {

// //   constructor(
// //     private route:Router,
// //   ) { }

// //   ngOnInit() {
// //   }
// //   toUpload(){
// //     this.route.navigate(['/upload-content'])
// //   }

  

// // }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// interface Course {
//   title: string;
//   category: string;
//   description: string;
// }

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.page.html',
//   styleUrls: ['./main.page.scss'],
// })
// export class MainPage implements OnInit {
//   isSearchInput = false;
//   isSearchFocused = false;
//   course: Course[] = [
//     {
//       title: "Python Course",
//       category: "IT",
//       description: "Python course for Beginner"
//     },
//     {
//       title: "English Course",
//       category: "Language",
//       description: "English course for Beginner"
//     },
//     {
//       title: "Electronics Course",
//       category: "Electronics and electrical",
//       description: "Electronics course for Beginner"
//     },
//     {
//       title: "Physics Course",
//       category: "Physics",
//       description: "Physics course for Beginner"
//     },
//     {
//       title: "Astronomy Course",
//       category: "Astronomy",
//       description: "Astronomy course for Beginner"
//     },
//     {
//       title: "Math Course",
//       category: "Math",
//       description: "Math course for Beginner"
//     },
//   ];
//   filteredItems: Course[] = this.course;

//   constructor(
//     private router: Router,
//   ) { }

//   ngOnInit() {
//   }

//   toUpload() {
//     this.router.navigate(['/upload-content']);
//   }

//   filterItems(event: any) {
//     this.isSearchInput = true;
//     const query = event.target.value.toLowerCase();
//     this.filteredItems = this.course.filter(item => item.title.toLowerCase().includes(query));
//     console.log(this.filteredItems);
//   }

//   onBlur() {
//     this.isSearchInput = false;
//     this.isSearchFocused = false;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  isSearchInput = true; // Set ini ke true untuk debug awal
  isSearchFocused = false;
  course: Course[] = [
    { title: "Python Course", category: "IT", description: "Python course for Beginner" },
    { title: "English Course", category: "Language", description: "English course for Beginner" },
    { title: "Electronics Course", category: "Electronics and electrical", description: "Electronics course for Beginner" },
    { title: "Physics Course", category: "Physics", description: "Physics course for Beginner" },
    { title: "Astronomy Course", category: "Astronomy", description: "Astronomy course for Beginner" },
    { title: "Math Course", category: "Math", description: "Math course for Beginner" }
  ];
  filteredItems: Course[] = this.course;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('initial filteredItems:', this.filteredItems);
  }

  toUpload() {
    this.router.navigate(['/upload-content']);
  }

  filterItems(event: any) {
    this.isSearchInput = true;
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.course.filter(item => item.title.toLowerCase().includes(query));
    console.log('filteredItems after filter:', this.filteredItems);
  }

  onBlur() {
    this.isSearchInput = false;
    this.isSearchFocused = false;
  }
}