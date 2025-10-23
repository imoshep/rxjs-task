import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UsersSelectors } from '../../store/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-name-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-name-component.html',
  styleUrl: './user-name-component.scss'
})
export class UserNameComponent {
  selectedUser$: Observable<any>;

  constructor(private store: Store) {
    this.selectedUser$ = this.store.select(UsersSelectors.selectSelectedUser);
  }
}
