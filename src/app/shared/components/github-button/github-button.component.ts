import { Component, Input } from '@angular/core';

@Component({
  selector: 'jw-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss'],
})
export class GithubButtonComponent {
  @Input()
  public repo: string;
}
