import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IImage } from '../../../projects/models/image.model';

@Component({
  selector: 'jw-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input()
  public slides: IImage[];

  public chosenImage: IImage;

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  public handleSlideSelected(template: TemplateRef<any>, img: IImage): void {
    this.setChosenImage(img);
    this.showModal(template);
  }

  private setChosenImage(img: IImage): void {
    this.chosenImage = img;
  }

  private showModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' }),
    );
  }
}
