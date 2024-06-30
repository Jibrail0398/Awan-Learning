import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './api/guard.service';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Authentication/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./Authentication/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'my-course',
    loadChildren: () => import('./pages/my-course/my-course.module').then( m => m.MyCoursePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/instructor/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'detail-course',
    loadChildren: () => import('./pages/detail-course/detail-course.module').then( m => m.DetailCoursePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'content-course',
    loadChildren: () => import('./pages/content-course/content-course.module').then( m => m.ContentCoursePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/instructor/main/main.module').then( m => m.MainPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/instructor/notification/notification.module').then( m => m.NotificationPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'teacher-account',
    loadChildren: () => import('./pages/instructor/teacher-account/teacher-account.module').then( m => m.TeacherAccountPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'upload-content',
    loadChildren: () => import('./pages/instructor/upload-content/upload-content.module').then( m => m.UploadContentPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'upload-content-course',
    loadChildren: () => import('./pages/upload-content-course/upload-content-course.module').then( m => m.UploadContentCoursePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [GuardService]
  },
  {
    path: 'tentang-awan',
    loadChildren: () => import('./pages/tentang-awan/tentang-awan.module').then( m => m.TentangAwanPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'update-content',
    loadChildren: () => import('./pages/update-content/update-content.module').then( m => m.UpdateContentPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'keamanan-akun',
    loadChildren: () => import('./pages/keamanan-akun/keamanan-akun.module').then( m => m.KeamananAkunPageModule),
    canActivate: [GuardService]
  },
  {
    path: 'profile-peserta',
    loadChildren: () => import('./pages/profile-peserta/profile-peserta.module').then( m => m.ProfilePesertaPageModule),
    canActivate: [GuardService]
  },


  


  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
