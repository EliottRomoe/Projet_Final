import { TestBed } from '@angular/core/testing';
import { ConnexionService } from '../services/connexion.service';

describe('ConnexionService', () => {
  let service: ConnexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});