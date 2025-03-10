import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'service', pathMatch: 'full' },
      {
        path: 'service',
        component: ServiceComponent,
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
export class ServiceRoutingModule { }
