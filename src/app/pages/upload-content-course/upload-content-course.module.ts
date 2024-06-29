import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadContentCoursePageRoutingModule } from './upload-content-course-routing.module';

import { UploadContentCoursePage } from './upload-content-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadContentCoursePageRoutingModule
  ],
  declarations: [UploadContentCoursePage]
})
export class UploadContentCoursePageModule {}
