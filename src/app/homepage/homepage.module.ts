import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeWrapperComponent,
    ProjectsOverviewComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '**',
        component: HomeWrapperComponent,
      },
    ]),
    SharedModule,
  ],
})
export class HomepageModule {}
