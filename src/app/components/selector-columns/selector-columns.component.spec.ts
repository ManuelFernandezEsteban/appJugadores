import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorColumnsComponent } from './selector-columns.component';

describe('SelectorColumnsComponent', () => {
  let component: SelectorColumnsComponent;
  let fixture: ComponentFixture<SelectorColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
