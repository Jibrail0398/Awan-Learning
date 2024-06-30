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
    // Hide the splash (you should do this on app launch)
    await SplashScreen.hide();

    // Show the splash for an indefinite amount of time:
    await SplashScreen.show({
      autoHide: false,
    });

    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    
  }
}



