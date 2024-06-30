import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price:number;
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(
    private route:Router,
    private api:ApiService
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.getwishlist();
  }
  
  myCourse:Course[]=[];
  
  getwishlist(){
    this.api.getWishlist().subscribe((res: any) => {
      this.myCourse = res.wishlists.map((item: any) => item.course);
      console.log(this.myCourse);
    });
  }
  getImageUrl(imagePath: string): string {
    return `https://awan.ylladev.my.id/storage/${imagePath}`;
  }
 
  convertrRupiah(price:number){
    
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }
  

  onClick(){
    this.route.navigate(['content-course']);
  }

}
