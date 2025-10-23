import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from './users.models';
import { UsersActions } from './index';

export interface UsersState extends EntityState<User> {
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState();

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state, { users }) => adapter.setAll(users, state)),
  on(UsersActions.addUser, (state, { user }) => adapter.addOne(user, state)),
  on(UsersActions.updateUser, (state, { update }) => adapter.updateOne(update, state)),
  on(UsersActions.deleteUser, (state, { id }) => adapter.removeOne(id, state)),
  on(UsersActions.saveUser, (state, { user }) => {
    const existingUser = state.entities[user.id];
    if (existingUser) {
      return adapter.updateOne({ id: user.id, changes: user }, state);
    } else {
      return adapter.addOne(user, state);
    }
  })
);

export const { selectAll } = adapter.getSelectors();
