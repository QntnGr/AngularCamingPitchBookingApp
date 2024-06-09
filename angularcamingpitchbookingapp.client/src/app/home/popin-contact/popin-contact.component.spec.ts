import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinContactComponent } from './popin-contact.component';

describe('PopinContactComponent', () => {
  let component: PopinContactComponent;
  let fixture: ComponentFixture<PopinContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopinContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopinContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
