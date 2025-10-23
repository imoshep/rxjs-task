import { ActionReducerMap } from '@ngrx/store';
import { usersReducer, UsersState } from './users/users.reducer';

export interface AppState {
  users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer,
};
