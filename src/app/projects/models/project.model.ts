import { IImage } from './image.model';
import { ITechnology } from './technology.model';
import { IWebsite } from './website.model';

export interface IProject {
  title: string;
  description: string[];
  technologies: ITechnology[];
  experience: string;
  images: IImage[];
  repo?: string;
  website?: IWebsite;
}
