import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarproductosComponent } from './registrarproductos.component';

describe('RegistrarproductosComponent', () => {
  let component: RegistrarproductosComponent;
  let fixture: ComponentFixture<RegistrarproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
