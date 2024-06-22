import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/api/storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private route:Router,
    private storage:StorageService
  ) { }

  ngOnInit() {
  }
 
  toInstructor(){
    this.route.navigate(['main'])
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['sign-in']);
  }
}
