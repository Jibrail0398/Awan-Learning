import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePesertaPageRoutingModule } from './profile-peserta-routing.module';

import { ProfilePesertaPage } from './profile-peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePesertaPageRoutingModule
  ],
  declarations: [ProfilePesertaPage]
})
export class ProfilePesertaPageModule {}
