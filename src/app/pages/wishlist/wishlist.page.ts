import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course{
  title:string;
  category:string;
  description:string;
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }
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
  onClick(){
    this.route.navigate(['content-course']);
  }

}
