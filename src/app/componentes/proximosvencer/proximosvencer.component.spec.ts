import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosvencerComponent } from './proximosvencer.component';

describe('ProximosvencerComponent', () => {
  let component: ProximosvencerComponent;
  let fixture: ComponentFixture<ProximosvencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosvencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosvencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
