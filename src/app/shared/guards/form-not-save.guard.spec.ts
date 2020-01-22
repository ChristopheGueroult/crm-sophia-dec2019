import { TestBed, async, inject } from '@angular/core/testing';

import { FormNotSaveGuard } from './form-not-save.guard';

describe('FormNotSaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormNotSaveGuard]
    });
  });

  it('should ...', inject([FormNotSaveGuard], (guard: FormNotSaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
