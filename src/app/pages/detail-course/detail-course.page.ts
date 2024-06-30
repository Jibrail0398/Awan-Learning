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
    this.getWishlist(); 
    
  }
  
  //Semua tentang Wishlist
  iswishlist:boolean=false;
  showMessage: boolean = false;
  message: string = '';
  courseId = localStorage.getItem("data");

  mywishlist: number[] = [];

  getWishlist(){
    
    this.api.getWishlist().subscribe((res:any)=>{   

      if (res && res.wishlists && Array.isArray(res.wishlists)) {
        this.mywishlist = res.wishlists.map((wishlist: any) => wishlist.course_id);
      } 
      if (this.courseId !== null) {
        const courseIdNumber = parseInt(this.courseId, 10);
        const checkwishlist = this.mywishlist.includes(courseIdNumber);
        if(checkwishlist){
          this.iswishlist=true;
        }else{
          this.iswishlist=false;
        }
      }
      
      console.log(this.mywishlist);
      console.log(this.iswishlist);
    })
  }
  wishlistControl(){
    if(!this.iswishlist){
      this.addWishlist(this.courseId);
    }else{
      this.removeWishlist(this.courseId);
    }
  }
  addWishlist(id:any){
    this.api.addWishlist(id).subscribe({
      next:(res)=>{

        this.iswishlist = !this.iswishlist;
        this.displayMessage('Ditambahkan ke daftar wishlist');
      },
      error:(res)=>{
        console.log(res.error);
      }
    })
  }
  removeWishlist(id:any){
    this.api.removewishlist(id).subscribe(
      (res:any)=>{
        this.iswishlist = !this.iswishlist;
        this.displayMessage('Dihapus dari daftar wishlist');
      },
      (error)=>{
        console.log(error);
      }
    )
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
