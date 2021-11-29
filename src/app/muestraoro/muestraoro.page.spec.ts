import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraoroPage } from './muestraoro.page';

describe('MuestraoroPage', () => {
  let component: MuestraoroPage;
  let fixture: ComponentFixture<MuestraoroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraoroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
