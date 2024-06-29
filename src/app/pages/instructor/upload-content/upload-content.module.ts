import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadContentPageRoutingModule } from './upload-content-routing.module';

import { UploadContentPage } from './upload-content.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadContentPageRoutingModule,
    HttpClientModule,
    NgSelectModule,
    
  
  ],
  declarations: [UploadContentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UploadContentPageModule {}
