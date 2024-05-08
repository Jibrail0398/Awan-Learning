import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModuleModule } from 'src/app/components/module/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModuleModule,
    RouterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
