import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookCardComponent } from './phone-book-card.component';

describe('PhoneBookCardComponent', () => {
  let component: PhoneBookCardComponent;
  let fixture: ComponentFixture<PhoneBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
