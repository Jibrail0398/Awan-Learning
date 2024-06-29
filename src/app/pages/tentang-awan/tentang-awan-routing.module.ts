import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangAwanPage } from './tentang-awan.page';

const routes: Routes = [
  {
    path: '',
    component: TentangAwanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangAwanPageRoutingModule {}
