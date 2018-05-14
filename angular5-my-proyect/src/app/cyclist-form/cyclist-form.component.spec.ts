import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistFormComponent } from './cyclist-form.component';

describe('CyclistFormComponent', () => {
  let component: CyclistFormComponent;
  let fixture: ComponentFixture<CyclistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
