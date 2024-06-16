import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadContentPage } from './upload-content.page';

const routes: Routes = [
  {
    path: '',
    component: UploadContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadContentPageRoutingModule {}
