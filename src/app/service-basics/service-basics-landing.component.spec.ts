import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBasicsLandingComponent } from './service-basics-landing.component';

describe('ServiceBasicsLandingComponent', () => {
  let component: ServiceBasicsLandingComponent;
  let fixture: ComponentFixture<ServiceBasicsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBasicsLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceBasicsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
