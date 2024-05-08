import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form = {
    email: '',
    password: ''
  }
  
  constructor(
    private router:Router,
   ) { 
    
   }

  ngOnInit() {
  }
  password:string = "";
  
  getPassword(Password:string){
    this.password = Password;
    
  }
  onClick(){
    console.log(this.form.email);
    console.log(this.password);
    this.router.navigate(["/home"]);
    
  }


}
