import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModuleModule  } from './components/module/shared-module/shared-module.module'; //Wajib ketika ingin menggunakan components di banyak halaman
import { HttpClientModule } from '@angular/common/http';  //Wajib import ketika menggunakan service API, Jika tidak halaman yang diinject akan kosong
import { TransactionService } from './api/transaction.service';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,SharedModuleModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TransactionService,
  ],
  bootstrap: [AppComponent],
  
})


export class AppModule {}
