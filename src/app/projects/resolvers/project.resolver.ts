import { projectsData } from '../projects.data';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { IProject } from '../models/project.model';

interface IResolved {
  project: IProject;
}

@Injectable()
export class ProjectResolver implements Resolve<any> {
  public resolve(route: ActivatedRouteSnapshot): IResolved {
    return { project: projectsData[route.url[0].path] };
  }
}
