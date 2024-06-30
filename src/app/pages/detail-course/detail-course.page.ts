import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {

  
  constructor(
    private api:ApiService,
    private route:Router
  ) { }

  ngOnInit() {
    this.getDetailCourse();
    
  }
  
  //Semua tentang Wishlist
  iswishlist:boolean=false;
  showMessage: boolean = false;
  message: string = '';

  wishlistControl(){
    if(!this.iswishlist){
      this.addWishlist();
    }else{
      this.removeWishlist();
    }
  }
  addWishlist(){
    this.iswishlist = !this.iswishlist;
    this.displayMessage('Ditambahkan ke daftar wishlist');
  }
  removeWishlist(){
    this.iswishlist = !this.iswishlist;
    this.displayMessage('Dihapus dari daftar wishlist');
  }

  displayMessage(msg: string) {
    this.message = msg;
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 4000); 
  }


  
  //Semua tentang isi konten kursus
  vidioDomain:any;
  imageDomain:any;
  price:any;
  detailCourse:any={};
  contents:any=[];
  
  getDetailCourse(){
    const CourseId = localStorage.getItem('data');
    this.api.getDetailCourse(CourseId).subscribe((res:any) =>{
      this.detailCourse = res['course'];
      console.log(this.detailCourse);
      this.vidioDomain = "https://awan.ylladev.my.id/storage/"+res.course.pre_vidio;
      this.imageDomain = "https://awan.ylladev.my.id/storage/"+res.course.image;
      function convertrRupiah(price:number){
    
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(price);
      }
      this.price = convertrRupiah(res.course.price);
      this.contents = res.contents;
    }); 
    
  }
  
  data = localStorage.getItem("data");
  rating:number = 4.5;


  course =new Function('return ' + this.data)();
 

  backHome(){
    
    localStorage.removeItem('data');
  }

}
