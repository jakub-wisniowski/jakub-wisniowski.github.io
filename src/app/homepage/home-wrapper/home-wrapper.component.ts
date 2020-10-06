import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'homepage-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss'],
})
export class HomeWrapperComponent {
  isCollapsed = true;

  constructor() {}

  scrollToSection(event, section) {
    if (
      event instanceof MouseEvent ||
      (event instanceof KeyboardEvent && event.key === 'Enter')
    ) {
      console.log(section);
      console.log(event);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isCollapsed = true;
    }
  }
}
