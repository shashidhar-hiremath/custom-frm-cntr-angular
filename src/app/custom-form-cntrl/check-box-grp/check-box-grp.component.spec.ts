import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxGrpComponent } from './check-box-grp.component';

describe('CheckBoxGrpComponent', () => {
  let component: CheckBoxGrpComponent;
  let fixture: ComponentFixture<CheckBoxGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
