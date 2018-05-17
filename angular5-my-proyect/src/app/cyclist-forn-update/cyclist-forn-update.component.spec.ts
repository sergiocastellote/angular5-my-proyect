import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistFornUpdateComponent } from './cyclist-forn-update.component';

describe('CyclistFornUpdateComponent', () => {
  let component: CyclistFornUpdateComponent;
  let fixture: ComponentFixture<CyclistFornUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistFornUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistFornUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
