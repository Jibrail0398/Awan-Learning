import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  form = {
    username: "",
    email: "",
    password:"",
    passwordConfirm:""
  }

  
  getPassword(Password:any){
    this.form.password = Password;
    
  }
  getConfirmPassword(Password:any){
    this.form.passwordConfirm = Password;
    
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.form.username);
    console.log(this.form.email);
    console.log(this.form.password);
    console.log(this.form.passwordConfirm);
  }

}
