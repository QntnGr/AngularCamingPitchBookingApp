import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySliderComponent } from './activity-slider.component';

describe('ActivitySliderComponent', () => {
  let component: ActivitySliderComponent;
  let fixture: ComponentFixture<ActivitySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
