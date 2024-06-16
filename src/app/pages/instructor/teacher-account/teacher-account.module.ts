import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherAccountPageRoutingModule } from './teacher-account-routing.module';

import { TeacherAccountPage } from './teacher-account.page';

import { SharedModuleModule } from 'src/app/components/module/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherAccountPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [TeacherAccountPage]
})
export class TeacherAccountPageModule {}
