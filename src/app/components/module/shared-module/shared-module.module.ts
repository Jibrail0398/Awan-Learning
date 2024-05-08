import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullButtonComponent } from 'src/app/components/full-button/full-button.component';

import { IonicModule } from '@ionic/angular';
import { InputPasswordToogleComponent } from '../../input-password-toogle/input-password-toogle.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterNavComponent } from '../../footer-nav/footer-nav.component';




@NgModule({
  declarations: [FullButtonComponent,InputPasswordToogleComponent,FooterNavComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports:[FullButtonComponent,InputPasswordToogleComponent,FooterNavComponent]
})
export class SharedModuleModule { }
