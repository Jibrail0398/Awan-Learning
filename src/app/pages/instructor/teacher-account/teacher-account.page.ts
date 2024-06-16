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

  toStudent(){
    this.route.navigate(['/home'])
  }
}
