import {Component, HostListener, Renderer2, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { RoadMapContent } from '../../models/road-map-content';
const modalContent = require('../../shared/roadMapContent.json');

@Component({
  selector: 'app-promo-content',
  templateUrl: './promo-content.component.html',
  styleUrls: ['./promo-content.component.scss']
})
export class PromoContentComponent {
  modalRef: BsModalRef;
  modalContent: RoadMapContent[] = modalContent;
  @ViewChildren('step') elements: QueryList<any>;

  constructor(private renderer: Renderer2,
              private modalService: BsModalService) { }

  @HostListener('window:scroll', ['$event'])
  isScrollCentered() {
    this.elements.map((element) => {
      const halfHeightElem = element.nativeElement.getBoundingClientRect().height / 2;
      const elementPosition = element.nativeElement.getBoundingClientRect().top - halfHeightElem;
      const startStep = (window.innerWidth < 768 ) ? window.innerHeight / 3 + 100 : window.innerHeight / 3 + 200;
      const finishStep = (window.innerWidth < 768 ) ? window.innerHeight / 3 - 100 : window.innerHeight / 3 - 200;
      if (elementPosition < startStep && elementPosition > finishStep) {
        this.renderer.addClass(element.nativeElement, 'active');
      } else {
        this.renderer.removeClass(element.nativeElement, 'active');
      }
    });
  }

  openModal(template: TemplateRef<HTMLElement>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign(this.modalContent, { class: 'map-modal' })
    );
  }

  toogleClass(event: MouseEvent & {target: Element}): void {
    switch (event.target.parentElement.classList.contains('active')) {
      case true:
        this.renderer.removeClass(event.target.parentElement, 'active');
        break;
      case false:
        this.renderer.addClass(event.target.parentElement, 'active');
        break;
      default:
        this.renderer.removeClass(event.target.parentElement, 'active');
    }
  }
}

