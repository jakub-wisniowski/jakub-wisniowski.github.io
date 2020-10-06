import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../models/project.model';

@Component({
  selector: 'jw-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  public project: IProject;

  constructor(private activatedRoute: ActivatedRoute) {
    this.project = this.activatedRoute.snapshot.data.projectResolver.project;
  }
}
