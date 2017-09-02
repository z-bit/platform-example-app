import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/user';
import * as authActions from '../actions/auth';
import * as authReducers from '../reducers';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
        [pending]="pending$ | async"
        [errorMessage]="error$ | async"
        (submitted)="onSubmit($event)"
    ></bc-login-form>
  `
})
export class LoginPageComponent {
  pending$ = this.store.select(authReducers.getLoginPagePending);
  error$ = this.store.select(authReducers.getLoginPageError);

  constructor(private store: Store<authReducers.State>) {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new authActions.Login($event));
  }
}