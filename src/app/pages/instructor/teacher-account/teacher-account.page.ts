import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-account',
  templateUrl: './teacher-account.page.html',
  styleUrls: ['./teacher-account.page.scss'],
})
export class TeacherAccountPage implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }
  myname = localStorage.getItem("name");
  email = localStorage.getItem('email');
  
  toProfile(){
    this.route.navigate(['/profile']);
  }

  toStudent(){
    this.route.navigate(['/home']);
  }
  logout(){
    this.route.navigate(["/sign-in"]);
    localStorage.removeItem('sub');
    localStorage.removeItem('token');
  }
}
