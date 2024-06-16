import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { register } from 'swiper/element/bundle';//Wajib ketika ingin menggunakan swiper

register();//Wajib ketika ingin menggunakan swiper

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  async splashScreen(){
    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
      }
}
