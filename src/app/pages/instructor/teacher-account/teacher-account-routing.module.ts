import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherAccountPage } from './teacher-account.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherAccountPageRoutingModule {}
