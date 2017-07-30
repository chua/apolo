import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosDetenidoComponent } from './derechos-detenido.component';

describe('DerechosDetenidoComponent', () => {
  let component: DerechosDetenidoComponent;
  let fixture: ComponentFixture<DerechosDetenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerechosDetenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechosDetenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
