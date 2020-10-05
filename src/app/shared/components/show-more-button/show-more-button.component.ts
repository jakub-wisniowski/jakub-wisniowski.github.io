import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-more-button',
  template: `<div class="button-wrapper">
    <button class="border-link" (click)="toggleDescription()">
      {{ isHidden ? 'Show gallery' : 'Hide gallery' }}
    </button>
  </div>`,
  styleUrls: ['./show-more-button.component.scss'],
})
export class ShowMoreButtonComponent {
  @Input()
  elementId: string;

  @Input()
  toggleClass: string;

  isHidden = true;

  constructor() {}

  get elementRef() {
    return document.getElementById(this.elementId);
  }
  toggleDescription() {
    this.isHidden = this.elementRef.classList.contains(this.toggleClass);
    if (this.isHidden) {
      this.elementRef.classList.remove(this.toggleClass);
    } else {
      this.elementRef.classList.add(this.toggleClass);
    }
  }
}
