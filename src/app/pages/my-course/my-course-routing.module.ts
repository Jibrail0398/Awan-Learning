import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCoursePage } from './my-course.page';

const routes: Routes = [
  {
    path: '',
    component: MyCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCoursePageRoutingModule {}
