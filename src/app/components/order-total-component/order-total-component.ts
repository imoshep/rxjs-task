import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersStoreFacade } from '../../store/users/users.facade';
import { Observable } from 'rxjs';
import { Order } from '../../store/users';

@Component({
  selector: 'app-order-total-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-total-component.html',
  styleUrl: './order-total-component.scss'
})
export class OrderTotalComponent {
  selectedUserOrders$: Observable<Order[]>;
  selectedUserSummary$: Observable<any>;

  constructor(private facade: UsersStoreFacade) {
    this.selectedUserOrders$ = this.facade.selectedUserOrders$;
    this.selectedUserSummary$ = this.facade.selectedUserSummary$;
  }
}
