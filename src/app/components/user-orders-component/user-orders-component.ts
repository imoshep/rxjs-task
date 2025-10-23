import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersStoreFacade } from '../../store/users/users.facade';
import { User, UsersSelectors } from '../../store/users';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserNameComponent } from '../user-name-component/user-name-component';
import { OrderTotalComponent } from '../order-total-component/order-total-component';
import { UserDetailsComponent } from '../user-details-component/user-details-component';

@Component({
  selector: 'app-user-orders-component',
  standalone: true,
  imports: [CommonModule, UserNameComponent, OrderTotalComponent, UserDetailsComponent],
  templateUrl: './user-orders-component.html',
  styleUrl: './user-orders-component.scss',
})
export class UserOrdersComponent implements OnInit {

  users$: Observable<User[]>;
  selectedUserSummary$: Observable<any>;

  constructor(
    private facade: UsersStoreFacade,
    private store: Store
  ) {
    this.users$ = this.facade.users$;
    this.selectedUserSummary$ = this.store.select(UsersSelectors.selectSelectedUserSummary);
  }

  ngOnInit(): void {
    this.facade.loadUsersFromService();
  }

  selectUser(userId: number): void {
    this.facade.selectUser(userId);
  }
}
