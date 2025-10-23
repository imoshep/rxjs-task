import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UsersActions, UsersSelectors } from './index';
import UsersService from '../../services/user-service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersStoreFacade {
  users$: Observable<User[]>;

  constructor(private store: Store, private usersService: UsersService) {
    this.users$ = this.store.select(UsersSelectors.selectAllUsers);
  }

  loadUsersFromService() {
    const users = this.usersService.getUsers(); // fetch mock data
    this.store.dispatch(UsersActions.loadUsers({ users }));
  }


  addUser(user: User) {
    this.store.dispatch(UsersActions.addUser({ user }));
  }

  updateUser(update: {id: number; changes: Partial<User>}) {
    this.store.dispatch(UsersActions.updateUser({ update }));
  }

  deleteUser(id: number) {
    this.store.dispatch(UsersActions.deleteUser({ id }));
  }

}
