import { Component, OnInit } from '@angular/core';
import { UsersStoreFacade } from '../../store/users/users.facade';
import { Observable } from 'rxjs';
import { User } from '../../store/users/users.models';

@Component({
  selector: 'app-user-orders-component',
  standalone: true,
  imports: [],
  templateUrl: './user-orders-component.html',
  styleUrl: './user-orders-component.scss',
})
export class UserOrdersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private facade: UsersStoreFacade) {
    this.users$ = this.facade.users$;
  }


  ngOnInit(): void {
    this.facade.loadUsersFromService();
  }
}
