import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsalidaComponent } from './registrarsalida.component';

describe('RegistrarsalidaComponent', () => {
  let component: RegistrarsalidaComponent;
  let fixture: ComponentFixture<RegistrarsalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarsalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
