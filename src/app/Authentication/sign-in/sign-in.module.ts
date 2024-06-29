import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { SharedModuleModule } from 'src/app/components/module/shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModuleModule,
    ForgotPasswordComponent
    
  ],
  declarations: [
    SignInPage,
    // InputPasswordToogleComponent,
    // FullButtonComponent
  ]
})
export class SignInPageModule {}
