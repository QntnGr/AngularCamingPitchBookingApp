import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchTypeComponent } from './pitch-type.component';

describe('PitchTypeComponent', () => {
  let component: PitchTypeComponent;
  let fixture: ComponentFixture<PitchTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PitchTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PitchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
