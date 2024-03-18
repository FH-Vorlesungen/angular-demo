import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemoLandingComponent } from './http-demo-landing.component';

describe('HttpDemoLandingComponent', () => {
  let component: HttpDemoLandingComponent;
  let fixture: ComponentFixture<HttpDemoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemoLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpDemoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
