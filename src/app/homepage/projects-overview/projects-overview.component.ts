import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'jw-homepage-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss'],
})
export class ProjectsOverviewComponent {
  private projectBackgrounds = {
    homeLibrary: 'assets/images/home-library/home-library-icon.png',
    planets: 'assets/images/planets/list-view.png',
    aknWebApp: 'assets/images/AKN-web-app/modify-account.png',
    aknMobileApp: 'assets/images/AKN-mobile-app/login-icon.png',
    RPNcalc: 'assets/images/RPN-calc/basic.png',
    legoApp: 'assets/images/lego-app/project-view.png',
    mrDumpling: 'assets/images/mr-dumpling/menu.png',
    climateCamp: 'assets/images/climate-camp/menu.png',
    climateCampWebsite: 'assets/images/icons/climate-camp-logo.png',
  };
  constructor(private renderer: Renderer2) {}

  public handleIntersection(visible: boolean, el: HTMLElement, project: string): void {
    if (visible) {
      this.setBackground(el, this.projectBackgrounds[project]);
      this.showProjectElement(el);
    } else {
      this.hideProjectElement(el);
    }
  }

  private setBackground(el: HTMLElement, projectBackground: string): void {
    this.renderer.setAttribute(
      el.querySelector('img'),
      'src',
      projectBackground,
    );
  }

  private showProjectElement(el: HTMLElement): void {
    this.renderer.addClass(el, 'intersecting');
  }

  private hideProjectElement(el: HTMLElement): void {
    this.renderer.removeClass(el, 'intersecting');
  }
}
