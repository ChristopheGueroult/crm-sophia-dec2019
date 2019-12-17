import { TestBed } from '@angular/core/testing';

import { GraphikService } from './graphik.service';

describe('GraphikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphikService = TestBed.get(GraphikService);
    expect(service).toBeTruthy();
  });
});
