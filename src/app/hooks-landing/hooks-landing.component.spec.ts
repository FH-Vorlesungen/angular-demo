import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksLandingComponent } from './hooks-landing.component';

describe('HooksLandingComponent', () => {
  let component: HooksLandingComponent;
  let fixture: ComponentFixture<HooksLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HooksLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
