import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from "jwt-decode";
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert:AlertController
  ) { }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const token = localStorage.getItem('token');
    if(!token){
      const alert = await this.alert.create({
        header: 'Silahkan Login Terlebih Dahulu',
        buttons: ['OK'],
        
      });
      await alert.present();
      alert.onDidDismiss().then(() => {
        this.router.navigate(['/sign-in']);
      });
      return false;
    }

    const decoded = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    const exp = decoded.exp || 0;
    if (decoded && decoded.exp && now > decoded.exp) {
      
      const alert = await this.alert.create({
        header: 'Sesi Login Anda Telah Habis',
        buttons: ['OK'],
        
      });
      await alert.present();
      alert.onDidDismiss().then(() => {
        this.router.navigate(['/sign-in']);
      });
      return false;
    }

    return true;
  }
}