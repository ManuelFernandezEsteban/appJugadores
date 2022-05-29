import { TestBed } from '@angular/core/testing';

import { JugadoresServicesService } from './jugadores-services.service';

describe('JugadoresServicesService', () => {
  let service: JugadoresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
