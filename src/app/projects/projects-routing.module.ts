import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from './resolvers/project.resolver';

const routes: Routes = [
  {
    path: '**',
    component: ProjectComponent,
    resolve: { projectResolver: ProjectResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
