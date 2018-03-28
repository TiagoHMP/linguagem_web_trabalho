import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTempoComponent } from './controle-tempo.component';

describe('ControleTempoComponent', () => {
  let component: ControleTempoComponent;
  let fixture: ComponentFixture<ControleTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
