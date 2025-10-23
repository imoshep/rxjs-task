import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from './users.models';
import { UsersActions } from './index';

export interface UsersState extends EntityState<User> {
  selectedUserId: number | null;
  userDetails: { [userId: number]: any };
  loadingUserDetails: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState({
  selectedUserId: null,
  userDetails: {},
  loadingUserDetails: false
});

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state, { users }) => adapter.setAll(users, state)),
  on(UsersActions.addUser, (state, { user }) => {
    const existingUser = state.entities[user.id];
    if (existingUser) {
      console.log('user already exist, updating user');
      return adapter.updateOne({ id: user.id, changes: user }, state);
    } else {
      return adapter.addOne(user, state);
    }
  }),
  on(UsersActions.updateUser, (state, { update }) => adapter.updateOne(update, state)),
  on(UsersActions.deleteUser, (state, { id }) => adapter.removeOne(id, state)),
  on(UsersActions.selectUser, (state, { id }) => ({
    ...state,
    selectedUserId: id
  })),
  on(UsersActions.loadUserDetails, (state, { userId }) => ({
    ...state,
    loadingUserDetails: true
  })),
  on(UsersActions.loadUserDetailsSuccess, (state, { userId, details }) => ({
    ...state,
    loadingUserDetails: false,
    userDetails: {
      ...state.userDetails,
      [userId]: details
    }
  })),
  on(UsersActions.loadUserDetailsFailure, (state, { userId, error }) => ({
    ...state,
    loadingUserDetails: false
  }))
);

export const { selectAll } = adapter.getSelectors();
