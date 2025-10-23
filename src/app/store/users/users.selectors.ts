import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, UsersState } from './users.reducer';
import { mockOrders } from '../../mock-data/orders';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
  selectUsersState,
  selectAll
);

export const selectSelectedUserId = createSelector(
  selectUsersState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUsersState,
  selectSelectedUserId,
  (state, selectedUserId) => {
    if (selectedUserId === null) return null;
    return state.entities[selectedUserId] || null;
  }
);

export const selectSelectedUserOrders = createSelector(
  selectSelectedUserId,
  (selectedUserId) => {
    if (selectedUserId === null) return [];
    return mockOrders.filter(order => order.userId === selectedUserId);
  }
);

export const selectSelectedUserSummary = createSelector(
  selectSelectedUser,
  selectSelectedUserOrders,
  (selectedUser, orders) => {
    if (!selectedUser) return null;

    const totalSum = orders.reduce((sum, order) => sum + order.total, 0);

    return {
      name: selectedUser.name,
      totalSum: totalSum
    };
  }
);
