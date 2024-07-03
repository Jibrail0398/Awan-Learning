import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { TransactionService } from 'src/app/api/transaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private api:ApiService,
    private transaction:TransactionService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getCart();
  }
  mycart:any[]=[];
  selectedCourses: any[] = [];
  totalPrice: number = 0;
  getCart(){
    this.api.getCart().subscribe((res:any)=>{
      this.mycart=res.cart_items.map((cart_items: any) => cart_items.course);
      
      console.log(this.mycart);
      
    })
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
  onCheckboxChange(event: any, course: any) {
    if (event.detail.checked) {
      this.selectedCourses.push(course);
    } else {
      this.selectedCourses = this.selectedCourses.filter(item => item !== course);
    }
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.selectedCourses.reduce((total, course) => total + course.price, 0);
  }
  pay() {
    const cartItems = this.selectedCourses.map(course => ({
      course_id: course.id,
      quantity: 1 // atau sesuai kebutuhan
    }));

    this.transaction.createTransaction(cartItems).subscribe(
      (response: any) => {
        console.log('Pembayaran berhasil diproses:', response);
        // Lakukan sesuatu dengan response, misalnya redirect ke URL pembayaran
        window.open(response.redirect_url, '_blank');
      },
      (error: any) => {
        console.error('Pembayaran gagal:', error);
        
      }
    );
  }
  

}
