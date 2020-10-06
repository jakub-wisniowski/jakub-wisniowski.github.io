import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWrapperComponent } from './homepage/home-wrapper/home-wrapper.component';

const routes: Routes = [
  { path: '', component: HomeWrapperComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
