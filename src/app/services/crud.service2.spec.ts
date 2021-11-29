import { TestBed } from '@angular/core/testing';

import { CrudService2 } from './crud.service2';

describe('CrudService2', () => {
  let service: CrudService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
