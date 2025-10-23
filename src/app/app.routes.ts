import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/user-orders-component/user-orders-component').then(m => m.UserOrdersComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
