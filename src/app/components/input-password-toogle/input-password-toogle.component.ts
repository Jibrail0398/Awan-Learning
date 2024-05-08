import { Component,OnInit,Output,EventEmitter,Input} from '@angular/core';


@Component({
  selector: 'app-input-password-toogle',
  templateUrl: './input-password-toogle.component.html',
  styleUrls: ['./input-password-toogle.component.scss'],
})



export class InputPasswordToogleComponent  implements OnInit {

  
  @Input() label: string = '';
  
  password:string="";
  @Output() Password = new EventEmitter <string>();

  postPassword(){
    this.Password.emit(this.password);
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  constructor() { }

  ngOnInit() {}

 

}
