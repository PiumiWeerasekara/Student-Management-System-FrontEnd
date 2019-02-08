import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Registration} from '../dtos/registration';
import {HttpClient} from '@angular/common/http';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/registrations';

@Injectable()
export class  RegistrationService {
  constructor(private http: HttpClient) { }

  saveRegistration(registration: Registration): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, registration);
  }
}
