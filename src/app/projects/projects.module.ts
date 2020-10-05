import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from './resolvers/project.resolver';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectComponent],
  providers: [ProjectResolver],
  imports: [CommonModule, ProjectsRoutingModule, RouterModule, SharedModule],
})
export class ProjectsModule {}
