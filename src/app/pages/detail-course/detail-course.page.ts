import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/api/teacher.service';
import { AuthService } from 'src/app/api/auth.service';


@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {

  
  constructor(
    private api:ApiService,
    private teacher:TeacherService,
    private route:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.getDetailCourse();
    this.getWishlist();
    this.madebyme();
    this.checkBoughtStatus();
    
  }

  ionViewWillEnter(){
    this.getCart();
    
  }
  
  
  isBought:boolean = false;
  isMadeByMe:boolean=false;
  iswishlist:boolean=false;
  iscart:boolean=false;
  showMessage: boolean = false;
  message: string = '';

  sub = this.auth.getSub();

  madeByMeIds:number[]=[];
  courseId = localStorage.getItem("data");
  courseBoughtIds: number[] = [];
  mywishlist: number[] = [];
  mycart:any[]=[];
  allcartobject:any;

  madebyme() {
    const myidcourse = this.courseId ? Number(this.courseId) : null;

    if (myidcourse === null) {
      console.log('ID kursus tidak valid');
      this.isMadeByMe = false;
      return;
    }

    this.teacher.getCourseUploaded(this.sub).pipe(
      map((response: any) => {
        if (response && response.courses && Array.isArray(response.courses)) {
          return response.courses.map((item: any) => item.id);
        }
        return [];
      })
    ).subscribe(
      (courseIds: number[]) => {
        if (courseIds.length > 0) {
          this.madeByMeIds = courseIds;
         
          // Periksa apakah courseId ada dalam daftar kursus yang dibuat
          this.isMadeByMe = this.madeByMeIds.includes(myidcourse);

          if (this.isMadeByMe) {
            console.log('Kursus ini dibuat oleh anda');
          } else {
            console.log('Kursus ini bukan dibuat oleh anda');
          }
        } else {
          console.log('Tidak ada kursus yang ditemukan');
          this.isMadeByMe = false;
        }
      },
      (error) => {
        console.error('Terjadi kesalahan:', error);
        this.isMadeByMe = false;
      }
    );
  }
  
  
  checkBoughtStatus() {
    const myidcourse = this.courseId ? Number(this.courseId) : null;

    if (myidcourse === null) {
      console.log('ID kursus tidak valid');
      this.isBought = false;
      return;
    }

    this.api.getMyCourse().pipe(
      map((response: any) => {
        if (response && response.myCourse && Array.isArray(response.myCourse)) {
          return response.myCourse.map((item:any) => item.course.id);
        }
        return [];
      })
    ).subscribe(
      (courseIds: number[]) => {
        if (courseIds.length > 0) {
          this.courseBoughtIds = courseIds;
         
          // Periksa apakah courseId dari localStorage ada dalam daftar kursus yang dibeli
          this.isBought = this.courseBoughtIds.includes(myidcourse);
         
          if (this.isBought) {
            console.log('Kursus ini telah dibeli');
          } else {
            console.log('Kursus ini belum dibeli');
          }
        } else {
          console.log('Tidak ada kursus yang ditemukan');
          this.isBought = false;
        }
      },
      (error) => {
        console.error('Terjadi kesalahan:', error);
        this.isBought = false;
      }
    );
  }

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

  cartControl(){
    
    if(!this.iscart){
      this.addcart(this.courseId);
    }else{
      this.removecart(this.courseId);
    }
  }
  
  getCart(){
    this.api.getCart().subscribe(
      (res:any)=>{
        this.mycart=res.cart_items.map((cart_items: any) => cart_items.course.id);
        this.allcartobject = res.cart_items.map((cart_items: any) => cart_items.id);
        if(this.courseId !== null){
          const courseIdNumber = parseInt(this.courseId, 10);
          const checkCart = this.mycart.includes(courseIdNumber)
          if(checkCart){
            this.iscart=true;
        }else{
          this.iscart=false;
        }
      }
        
    })
  }

  addcart(id:any){
    this.api.addCart(id).subscribe({
      next:(res)=>{

        this.iscart = !this.iscart;
        this.getCart();
        
      },
      error:(res)=>{
        console.log(res.error);
      }
    })
  }


  
  removecart(courseId: string | null) {
    if (courseId === null) return;
    
    const courseIdNumber = parseInt(courseId);
    const index = this.mycart.indexOf(courseIdNumber);
    
    if (index !== -1) {
      const cartIdToRemove = this.allcartobject[index];
      
      this.api.removeCart(cartIdToRemove).subscribe(
        (res: any) => {
          this.iscart = !this.iscart;
          this.mycart.splice(index, 1);
          this.allcartobject.splice(index, 1);
          
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Course not found in cart");
    }
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
 
  toMyCourse(){
    this.route.navigate(['content-course']);
  }
  backHome(){
    
    localStorage.removeItem('data');
  }

}
