import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveInComponent } from './dive-in.component';

describe('DiveInComponent', () => {
  let component: DiveInComponent;
  let fixture: ComponentFixture<DiveInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiveInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
