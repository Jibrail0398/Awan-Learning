import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateContentPageRoutingModule } from './update-content-routing.module';

import { UpdateContentPage } from './update-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateContentPageRoutingModule
  ],
  declarations: [UpdateContentPage]
})
export class UpdateContentPageModule {}
