import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




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
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'my-course',
    loadChildren: () => import('./pages/my-course/my-course.module').then( m => m.MyCoursePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
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
    loadChildren: () => import('./pages/detail-course/detail-course.module').then( m => m.DetailCoursePageModule)
  },
  {
    path: 'content-course',
    loadChildren: () => import('./pages/content-course/content-course.module').then( m => m.ContentCoursePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/instructor/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/instructor/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'teacher-account',
    loadChildren: () => import('./pages/instructor/teacher-account/teacher-account.module').then( m => m.TeacherAccountPageModule)
  },
  {
    path: 'upload-content',
    loadChildren: () => import('./pages/instructor/upload-content/upload-content.module').then( m => m.UploadContentPageModule)
  },  {
    path: 'upload-content-course',
    loadChildren: () => import('./pages/upload-content-course/upload-content-course.module').then( m => m.UploadContentCoursePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },

  


  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
