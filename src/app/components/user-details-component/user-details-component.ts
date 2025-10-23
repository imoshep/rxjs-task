import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersStoreFacade } from '../../store/users/users.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details-component.html',
  styleUrl: './user-details-component.scss'
})
export class UserDetailsComponent {
  selectedUserDetails$: Observable<any>;
  loadingUserDetails$: Observable<boolean>;

  constructor(private facade: UsersStoreFacade) {
    this.selectedUserDetails$ = this.facade.selectedUserDetails$;
    this.loadingUserDetails$ = this.facade.loadingUserDetails$;
  }
}
