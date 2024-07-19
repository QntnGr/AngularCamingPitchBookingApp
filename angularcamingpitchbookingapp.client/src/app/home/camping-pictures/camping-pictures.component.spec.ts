import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPicturesComponent } from './camping-pictures.component';

describe('CampingPicturesComponent', () => {
  let component: CampingPicturesComponent;
  let fixture: ComponentFixture<CampingPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampingPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampingPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
