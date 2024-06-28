import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateContentPageRoutingModule } from './update-content-routing.module';

import { UpdateContentPage } from './update-content.page';
import { ModalEditComponent } from 'src/app/components/modal-edit/modal-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateContentPageRoutingModule,
    ModalEditComponent
  ],
  declarations: [UpdateContentPage]
})
export class UpdateContentPageModule {}
