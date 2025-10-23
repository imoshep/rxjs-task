import { ActionReducerMap } from '@ngrx/store';
import { UsersReducer, UsersEffects } from './users';

export interface AppState {
  users: UsersReducer.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: UsersReducer.usersReducer,
};

export const effects = [UsersEffects];
