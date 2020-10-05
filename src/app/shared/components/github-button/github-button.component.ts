import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss'],
})
export class GithubButtonComponent {
  @Input()
  repo: string;
}
