import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Camp2Page } from './camp2.page';

describe('Camp2Page', () => {
  let component: Camp2Page;
  let fixture: ComponentFixture<Camp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Camp2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Camp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
