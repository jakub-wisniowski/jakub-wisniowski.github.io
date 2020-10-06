import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IImage } from '../../../projects/models/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input()
  slides: IImage[];

  chosenImage: IImage;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  handleSlideSelected(template: TemplateRef<any>, img: IImage) {
    this.setChosenImage(img);
    this.showModal(template);
  }

  setChosenImage(img: IImage) {
    this.chosenImage = img;
  }

  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
