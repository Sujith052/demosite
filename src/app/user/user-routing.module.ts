import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path:'', component:UserComponent,
    children:[
      { path: '', redirectTo: 'request', pathMatch: 'full' },
      {
        path: 'service',
        loadChildren: () =>
          import('./service/service.module').then((m) => m.ServiceModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'features',
        loadChildren: () =>
          import('./features/features.module').then((m) => m.FeaturesModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
