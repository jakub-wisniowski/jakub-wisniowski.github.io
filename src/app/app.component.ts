import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jakub-wisniowski';

  @ViewChild('backToTop')
  backToTop: ElementRef;

  constructor(private router: Router) {}

  scrollToTop = () => {
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

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
