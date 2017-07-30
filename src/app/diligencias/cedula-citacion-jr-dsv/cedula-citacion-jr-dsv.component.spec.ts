import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaCitacionJrDsvComponent } from './cedula-citacion-jr-dsv.component';

describe('CedulaCitacionJrDsvComponent', () => {
  let component: CedulaCitacionJrDsvComponent;
  let fixture: ComponentFixture<CedulaCitacionJrDsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedulaCitacionJrDsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedulaCitacionJrDsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
