import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgoundHeaderComponent } from './backgound-header.component';

describe('BackgoundHeaderComponent', () => {
  let component: BackgoundHeaderComponent;
  let fixture: ComponentFixture<BackgoundHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgoundHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgoundHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
