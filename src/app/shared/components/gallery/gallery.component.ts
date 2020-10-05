import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IImage } from '../../../projects/models/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  slides: IImage[];

  chosenImage: IImage;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  ngOnInit() {}

  openModal(template: TemplateRef<any>, img: IImage) {
    this.chosenImage = img;

    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
