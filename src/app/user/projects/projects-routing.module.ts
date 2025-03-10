import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
      path: '',
      children: [
        { path: '', redirectTo: 'projects', pathMatch: 'full' },
        {
          path: 'projects',
          component: ProjectsComponent,
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
export class ProjectsRoutingModule { }
