import { TestBed } from '@angular/core/testing';

import { ListOfStudentsService } from './list-of-students.service';

describe('ListOfStudentsService', () => {
  let service: ListOfStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
