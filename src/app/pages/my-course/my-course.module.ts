import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCoursePageRoutingModule } from './my-course-routing.module';

import { MyCoursePage } from './my-course.page';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/components/module/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCoursePageRoutingModule,
    SharedModuleModule,
    RouterModule
  ],
  declarations: [MyCoursePage]
})
export class MyCoursePageModule {}
