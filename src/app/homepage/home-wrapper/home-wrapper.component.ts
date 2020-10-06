import { Component } from '@angular/core';

@Component({
  selector: 'jw-homepage-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss'],
})
export class HomeWrapperComponent {
  public isCollapsed = true;

  constructor() {}

  public scrollToSection(event, section): void {
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
