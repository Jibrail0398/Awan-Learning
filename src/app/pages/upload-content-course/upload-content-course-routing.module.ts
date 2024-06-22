import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadContentCoursePage } from './upload-content-course.page';

const routes: Routes = [
  {
    path: '',
    component: UploadContentCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadContentCoursePageRoutingModule {}
