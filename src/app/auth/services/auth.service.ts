import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {

  login({ username, password }: Authenticate) {
    if (username !== 'test') {
      return _throw('Invalid Userame or password');
    }
    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
