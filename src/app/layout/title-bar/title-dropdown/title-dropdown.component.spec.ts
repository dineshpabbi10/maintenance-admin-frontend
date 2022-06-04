import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDropdownComponent } from './title-dropdown.component';

describe('TitleDropdownComponent', () => {
  let component: TitleDropdownComponent;
  let fixture: ComponentFixture<TitleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
