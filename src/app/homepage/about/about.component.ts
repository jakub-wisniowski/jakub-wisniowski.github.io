import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'jw-homepage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  constructor(private renderer: Renderer2) {}

  public handleIntersection(visible: boolean, el: HTMLElement): void {
    visible
      ? this.renderer.addClass(el, 'intersecting')
      : this.renderer.removeClass(el, 'intersecting');
  }

}
