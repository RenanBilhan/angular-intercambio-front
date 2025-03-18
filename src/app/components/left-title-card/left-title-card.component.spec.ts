import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTitleCardComponent } from './left-title-card.component';

describe('LeftTitleCardComponent', () => {
  let component: LeftTitleCardComponent;
  let fixture: ComponentFixture<LeftTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTitleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
