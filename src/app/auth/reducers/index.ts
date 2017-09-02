import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as rootReducer from '../../reducers';
import * as authReducer from './auth';
import * as loginPageReducer from './login-page';

export interface AuthState {
  status: authReducer.State;
  loginPage: loginPageReducer.State;
}

export interface State extends rootReducer.State {
  auth: AuthState;
}

export const reducers = {
  status: authReducer.reducer,
  loginPage: loginPageReducer.reducer,
};

export const selectAuthState
  = createFeatureSelector<AuthState>('auth');

export const selectAuthStateStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStateStatus,
  authReducer.getLoggedIn
);

export const getUser = createSelector(
  selectAuthStateStatus,
  authReducer.getUser
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);

export const getLoginPageError = createSelector(
  selectLoginPageState,
  loginPageReducer.getError
);

export const getLoginPagePending = createSelector(
  selectLoginPageState,
  loginPageReducer.getPending
);
