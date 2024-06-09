import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentCoursePageRoutingModule } from './content-course-routing.module';

import { ContentCoursePage } from './content-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentCoursePageRoutingModule
  ],
  declarations: [ContentCoursePage]
})
export class ContentCoursePageModule {}
