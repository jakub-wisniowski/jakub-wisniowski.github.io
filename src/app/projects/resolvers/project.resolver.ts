import { projectsData } from '../projects.data';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    return { project: projectsData[route.url[0].path] };
  }
}
