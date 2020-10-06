import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'jw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'jakub-wisniowski';

  @ViewChild('backToTop')
  public backToTop: ElementRef;

  constructor(private router: Router) {}

  public scrollToTop = () => {
    const button = this.backToTop.nativeElement as HTMLElement;

    button.classList.add('active');
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - 30);
    } else {
      button.classList.remove('active');
      button.blur();
    }
  }

  public ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
