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

export const saveUser = createAction(
  '[Users] Save User',
  props<{user: User}>()
);
