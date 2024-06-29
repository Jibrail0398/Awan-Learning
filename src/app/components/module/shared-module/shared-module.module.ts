//wajib membuat sharedModule jika ingin mengimport element dibanyak page

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullButtonComponent } from 'src/app/components/full-button/full-button.component';

import { IonicModule } from '@ionic/angular';
import { InputPasswordToogleComponent } from '../../input-password-toogle/input-password-toogle.component';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { RouterModule } from '@angular/router'; //Wajib ketika ingin menggunakan komponen yang memanfaatkan properti routerLink
import { FooterNavComponent } from '../../footer-nav/footer-nav.component';
import { TeacherFooterNavComponent } from '../../teacher-footer-nav/teacher-footer-nav.component';



@NgModule({
  declarations: [FullButtonComponent,InputPasswordToogleComponent,FooterNavComponent,TeacherFooterNavComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    
    
  ],
  exports:[FullButtonComponent,InputPasswordToogleComponent,FooterNavComponent,TeacherFooterNavComponent]
})
export class SharedModuleModule { }
