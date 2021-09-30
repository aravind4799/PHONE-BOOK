import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookFormComponent } from './phone-book-form.component';

describe('PhoneBookFormComponent', () => {
  let component: PhoneBookFormComponent;
  let fixture: ComponentFixture<PhoneBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
