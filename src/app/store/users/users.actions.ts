import { createAction, props } from '@ngrx/store';
import { User } from './users.models';

export const loadUsers = createAction(
  '[Users] Load Users',
  props<{users: User[]}>()
);

export const addUser = createAction(
  '[Users] Add User',
  props<{user: User}>()
);

export const updateUser = createAction(
  '[Users] Update User',
  props<{update: {id: number; changes: Partial<User>}}>()
);

export const deleteUser = createAction(
  '[Users] Delete User',
  props<{id: number}>()
);

export const selectUser = createAction(
  '[Users] Select User',
  props<{id: number}>()
);

export const loadUserDetails = createAction(
  '[Users] Load User Details',
  props<{userId: number}>()
);

export const loadUserDetailsSuccess = createAction(
  '[Users] Load User Details Success',
  props<{userId: number; details: any}>()
);

export const loadUserDetailsFailure = createAction(
  '[Users] Load User Details Failure',
  props<{userId: number; error: string}>()
);

