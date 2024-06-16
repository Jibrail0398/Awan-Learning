import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import Swiper from 'swiper';




@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.page.html',
  styleUrls: ['./upload-content.page.scss'],
})


export class UploadContentPage implements OnInit {


  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?:Swiper;

  selectedImage: string | ArrayBuffer | null = null;
  selectedVideo: string | ArrayBuffer | null = null;
  selectedImageName: string = '';
  selectedVideoName: string = ''; 

  //Swiper Slide 1

  courses = {
    name:"",
    description:"",
    image:"",
  }

  category = "";

  constructor() { 
    
  }

  ngOnInit() {

  }
  
  
  categories = [
    {id: 1, name: 'IT'},
    {id: 2, name: 'Engineering'},
    {id: 3, name: 'Science', disabled: true},
    {id: 4, name: 'Art'},
    {id: 5, name: 'Music'}
  ];  
  
  selectedCategory: any;

  myswiper:any;
  swiperInit(event: any) {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.myswiper = event.target;
    this.myswiper.loop = false;  
    this.myswiper.allowTouchMove = false;
  }

  goNext(){
    this.swiper?.slideNext();
  }
  goPrev(){
    this.swiper?.slidePrev();
    
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedImageName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.selectedImage = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onVideoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedImageName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.selectedVideo = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  //Swiper Slide 2

  contentCourse = {
    title:[''],
    description:['']
  }

  inputs: { value: string }[] = [{ value: '' }];
  descContent: { value: string }[] = [{ value: '' }];

  addInput() {
    this.inputs.push({ value: '' });
    
  }
  removeInput(index: number) {
    this.inputs.splice(index, 1);
    this.descContent.splice(index, 1);
  }


  //Swiper Slide 3

  requirements:{value:string}[]=[{value:''}];
  price:number=0;

  addrequirement(){
    this.requirements.push({ value: '' });
  }
  removerequirement(index: number) {
    this.requirements.splice(index, 1);
  }

  kirim(){
    this.contentCourse.title = this.inputs.map(input=>input.value);
    this.contentCourse.description = this.descContent.map(descContent=>descContent.value);
    console.log(this.courses);
    console.log(this.contentCourse);
    console.log(this.contentCourse);
    console.log(this.requirements);
    console.log(this.price)
  }

}
