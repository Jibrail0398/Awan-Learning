import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';//Wajib ketika ingin menggunakan swiper
import { TutorialPageRoutingModule } from './tutorial-routing.module';
import { SharedModuleModule } from 'src/app/components/module/shared-module/shared-module.module';
import { TutorialPage } from './tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    SharedModuleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],//Wajib ketika ingin menggunakan swiper
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
