import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcComparecenciaDsvComponent } from './alc-comparecencia-dsv.component';

describe('AlcComparecenciaDsvComponent', () => {
  let component: AlcComparecenciaDsvComponent;
  let fixture: ComponentFixture<AlcComparecenciaDsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcComparecenciaDsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcComparecenciaDsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
