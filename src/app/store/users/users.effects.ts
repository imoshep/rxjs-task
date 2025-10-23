import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersActions, UsersSelectors } from './index';
import { catchError, delay, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  loadUserDetails$: any;

  constructor(
    private actions$: Actions,
    private store: Store
  ) {
    this.loadUserDetails$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UsersActions.selectUser),
        withLatestFrom(this.store.select(UsersSelectors.selectSelectedUserId) as Observable<number | null>),
        filter(([action, selectedUserId]: [any, number | null]) => selectedUserId !== null),
        switchMap(([action, selectedUserId]: [any, number | null]) => {
          const userId = selectedUserId!; // Safe to use ! here due to filter above

          this.store.dispatch(UsersActions.loadUserDetails({ userId }));

          return this.simulateApiCall(userId).pipe(
            map(details => UsersActions.loadUserDetailsSuccess({
              userId,
              details
            })),
            catchError(error => of(UsersActions.loadUserDetailsFailure({
              userId,
              error: error.message
            })))
          );
        })
      );
    });
  }

  private simulateApiCall(userId: number): Observable<any> {
    const delayTime = Math.random() * 2000 + 500;

    return of({
      id: userId,
      email: `user${userId}@example.com`,
      phone: `03-534${userId.toString()}`,
      address: `${userId} Arlozorov St, Tel Aviv`,
      lastLogin: new Date().toISOString(),
    }).pipe(
      delay(delayTime)
    );
  }
}
