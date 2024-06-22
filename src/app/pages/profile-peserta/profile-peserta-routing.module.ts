import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePesertaPage } from './profile-peserta.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePesertaPageRoutingModule {}
