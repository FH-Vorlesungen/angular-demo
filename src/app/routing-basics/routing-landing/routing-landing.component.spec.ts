import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLandingComponent } from './routing-landing.component';

describe('RoutingLandingComponent', () => {
  let component: RoutingLandingComponent;
  let fixture: ComponentFixture<RoutingLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
