import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHomeComponent } from './carrousel-home.component';

describe('CarrouselHomeComponent', () => {
  let component: CarrouselHomeComponent;
  let fixture: ComponentFixture<CarrouselHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrouselHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
