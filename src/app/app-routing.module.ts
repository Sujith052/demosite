import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user', loadChildren:() => import('./user/user.module').then((m) => m.UserModule),
  },
  // {
  //   path:'auth', loadChildren:() => import('./auth/auth.module').then((m) => m.),
  // },
  {
    path:'', redirectTo:'/user' , pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
