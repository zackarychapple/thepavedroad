import {Component, HostListener, Renderer2, ViewChildren, QueryList, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-promo-content',
  templateUrl: './promo-content.component.html',
  styleUrls: ['./promo-content.component.scss']
})
export class PromoContentComponent {
  modalRef: BsModalRef;
  modalContent: object[] = [
    {
      title: 'heading',
      text: `At The Paved Road, we aspire to create a diverse and inclusive software industry.
        We believe access for underrepresented communities is limited.
        As members of the tech community we see it as our responsibility to responsibly, sustainably,
        and ethically create new avenues for these communities to join the industry
        authentically, while inspiring other organizations to join us in this work.
        We have designed a system of change with technical training programs,
        facilitated access to industry conferences, meaningful apprenticeships, 
        and supplemented with partnerships with other nonprofits for where our expertise ends.`
    },
    {
      title: 'heading',
      text: `The journey along the paved road begins at one of our partner conferences with a free, 
      full day “Intro to Tech” workshop which focuses on giving attendees an overview on a career in tech.`
    },
    {
      title: 'heading',
      text: `Attendees of the workshop have an opportunity to interview for a spot in our paid apprenticeship 
      program. This is an opportunity to share their stories and aspirations; 
      the best builders and makers are people of great passion and creativity.`
    },
    {
      title: 'heading',
      text: `Once accepted, apprentices will be provided a team of mentors to begin their 6-month 
      journey, a laptop, and access to essential tools and guidance to get them through the road 
      ahead. At $20+/hr, they’ll experience technical and professional growth while working on real 
      projects designed to teach them the skills needed to enter the tech industry prepared for both 
      independent and collaborative work.`
    },
    {
      title: 'heading',
      text: `Once our apprentices have polished their technical and tacit skills, 
      it’s time to prep for the job hunt. We have a comprehensive approach to support our 
      apprentices: Big things like mock interviews and resume review, and little things like 
      guidance and financial support for them to find the right attire for job interviews.`
    },
    {
      title: 'heading',
      text: `Our partnerships with organizations throughout the United States offers 
      meaningful access for our apprentices to quality career opportunities. This, coupled with 
      the knowledge and skills gained from their apprenticeship, prepare our apprentices to walk 
      into their first interviews with confidence.`
    },
    {
      title: 'heading',
      text: `A new life begins! It’s hard to believe how much our apprentices grow by the end of 
      our core program, and more importantly, how empowered they are at the end of
       The Paved Road to share that perspective with others.`
    },
    {
      title: 'heading',
      text: `The Paved Road graduates are given a free ticket to a partner conference 
      of their choice where they have the opportunity to share their story and begin to mentor 
      others interested in the program, reinvesting in their communities.`
    },
    {
      title: 'heading',
      text: `It doesn't stop there -- all graduates receive ongoing mentorship from our mentor 
      network as their career progresses, making them even more valuable to 
      their employers and providing them with the consistency needed to succeed in a new context.`
    }
  ];
  @ViewChildren('step') elements: QueryList<any>;

  constructor(private renderer: Renderer2,
              private modalService: BsModalService) { }

  @HostListener('window:scroll', ['$event'])
  isScrollCentered() {
    this.elements.map((element) => {
      const halfHeightElem = element.nativeElement.getBoundingClientRect().height / 2;
      const elementPosition = element.nativeElement.getBoundingClientRect().top - halfHeightElem;
      const startStep = window.innerHeight / 3.2;
      const finishStep = window.innerHeight / 2.3;
      if (elementPosition > startStep  && elementPosition < finishStep) {
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

