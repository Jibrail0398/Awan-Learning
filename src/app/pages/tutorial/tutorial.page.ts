import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?:Swiper;

  
  
  swiperReady(){
    
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  goNext(){
    this.swiper?.slideNext();     
  }
  swiperSlideChanged(e:any){
    console.log('changed',e)
  }
  constructor() { }

  ngOnInit() {
    
  }

  authGoogle(){
    
  }

}
