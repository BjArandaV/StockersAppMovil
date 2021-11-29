import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraplataPage } from './muestraplata.page';

describe('MuestraplataPage', () => {
  let component: MuestraplataPage;
  let fixture: ComponentFixture<MuestraplataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraplataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraplataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
