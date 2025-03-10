import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
          path: '',
          children: [
            { path: '', redirectTo: 'features', pathMatch: 'full' },
            {
              path: 'features',
              component: FeaturesComponent,
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
export class FeaturesRoutingModule { }
