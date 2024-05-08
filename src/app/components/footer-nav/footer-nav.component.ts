import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 






@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
})
export class FooterNavComponent  implements OnInit {

  
  constructor(private router:Router) { }
  
  ngOnInit() {
    
  }


  home(){ 
    
    this.router.navigate(["/home"]);
  }
  myCourse(){
    
    this.router.navigate(["/my-course"]);
  }
  wishlist(){
    
    this.router.navigate(["/wishlist"]);
  }
  account(){
    
    this.router.navigate(["/account"]);
  }
  
}
