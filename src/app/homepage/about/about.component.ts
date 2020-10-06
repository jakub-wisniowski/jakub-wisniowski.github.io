import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'homepage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private renderer: Renderer2) {}

  handleIntersection(visible: boolean, el: HTMLElement) {
    visible
      ? this.renderer.addClass(el, 'intersecting')
      : this.renderer.removeClass(el, 'intersecting');
  }

}
