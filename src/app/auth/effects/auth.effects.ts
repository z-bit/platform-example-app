import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as authActions from '../actions/auth';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN)
    .map( (action: authActions.Login) => action.payload )
    .exhaustMap(
      auth => this.authService
        .login(auth)
        .map( user => new authActions.LoginSuccess(user) )
        .catch( error => of(new authActions.LoginFailure(error)) )
    )
  ;

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.ofType(authActions.LOGIN_SUCCESS)
    .do( () => this.router.navigate(['/']) )
  ;

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(authActions.LOGIN_REDIRECT, authActions.LOGOUT)
    .do( authed => this.router.navigate(['/login']))
  ;
}

