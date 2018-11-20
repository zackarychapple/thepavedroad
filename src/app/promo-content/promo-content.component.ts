import {Component, ElementRef, HostListener, Renderer2, ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-promo-content',
  templateUrl: './promo-content.component.html',
  styleUrls: ['./promo-content.component.scss']
})
export class PromoContentComponent {

  @ViewChildren('step') elements: QueryList<any>;

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  isScrollCentered(event?) {
    this.elements.find((element) => {
      const elementPosition = element.nativeElement.getBoundingClientRect().top - element.nativeElement.getBoundingClientRect().height;
      if (elementPosition > window.innerHeight / 2.5 && elementPosition < window.innerHeight / 1.75) {
        this.renderer.addClass(element.nativeElement, 'active');
      } else {
        this.renderer.removeClass(element.nativeElement, 'active');
      }

      return;
    });
  }

}
