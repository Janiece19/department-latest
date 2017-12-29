import { TestBed, inject } from '@angular/core/testing';
import { FormService } from './form-service';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

describe('FormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService]
    });
  });
  // it('should be created', inject([FormService], (service: FormService) => {
  //   // spyOn(FormService._http.get()).toBeDefined()
  //   expect(service.getDepartment()).toBeDefined();
  // }));
});
