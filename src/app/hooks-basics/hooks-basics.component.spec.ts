import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksBasicsComponent } from './hooks-basics.component';

describe('HooksBasicsComponent', () => {
  let component: HooksBasicsComponent;
  let fixture: ComponentFixture<HooksBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
