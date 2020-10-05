import { NgModule } from '@angular/core';
import { ShowMoreButtonComponent } from './components/show-more-button/show-more-button.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntersectionDirective } from './directives/intersection.directive';

@NgModule({
  declarations: [
    GalleryComponent,
    GithubButtonComponent,
    ShowMoreButtonComponent,
    ClickOutsideDirective,
    IntersectionDirective,
  ],
  imports: [CommonModule, ModalModule.forRoot(), RouterModule],
  exports: [
    GalleryComponent,
    GithubButtonComponent,
    ShowMoreButtonComponent,
    ClickOutsideDirective,
    IntersectionDirective,
  ],
})
export class SharedModule {}
