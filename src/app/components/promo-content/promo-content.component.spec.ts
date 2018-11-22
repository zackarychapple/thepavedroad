import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoContentComponent } from './promo-content.component';

describe('PromoContentComponent', () => {
  let component: PromoContentComponent;
  let fixture: ComponentFixture<PromoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
