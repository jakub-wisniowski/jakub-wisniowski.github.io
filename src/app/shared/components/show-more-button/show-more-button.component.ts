import { Component, Input } from '@angular/core';

@Component({
  selector: 'jw-show-more-button',
  template: `<div class="button-wrapper">
    <button class="border-link" (click)="toggleDescription()">
      {{ isHidden ? 'Show gallery' : 'Hide gallery' }}
    </button>
  </div>`,
  styleUrls: ['./show-more-button.component.scss'],
})
export class ShowMoreButtonComponent {
  @Input()
  private elementId: string;

  @Input()
  private toggleClass: string;

  public isHidden = true;

  constructor() {}

  get elementRef(): HTMLElement {
    return document.getElementById(this.elementId);
  }

  public toggleDescription(): void {
    this.isHidden = this.elementRef.classList.contains(this.toggleClass);

    if (this.isHidden) {
      this.elementRef.classList.remove(this.toggleClass);
    } else {
      this.elementRef.classList.add(this.toggleClass);
    }
  }
}
