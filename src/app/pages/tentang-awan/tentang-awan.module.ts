import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TentangAwanPageRoutingModule } from './tentang-awan-routing.module';

import { TentangAwanPage } from './tentang-awan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentangAwanPageRoutingModule
  ],
  declarations: [TentangAwanPage]
})
export class TentangAwanPageModule {}
