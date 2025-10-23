import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, selectAll } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
  selectUsersState,
  selectAll
);
