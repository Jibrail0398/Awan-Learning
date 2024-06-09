import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentCoursePage } from './content-course.page';

const routes: Routes = [
  {
    path: '',
    component: ContentCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentCoursePageRoutingModule {}
