import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingValueComponent } from './rating-value.component';

describe('RatingValueComponent', () => {
  let component: RatingValueComponent;
  let fixture: ComponentFixture<RatingValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
