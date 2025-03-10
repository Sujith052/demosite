import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
        path: '',
        children: [
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          {
            path: 'about',
            component: AboutComponent,
            // data: {
            //   roles: [
            //     UserRole.ADMIN,
            //   ]
            // }
          },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
