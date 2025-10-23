import { Order } from '../store/users';

export const mockOrders: Order[] = [
  { id: 1, userId: 1, total: 100 },
  { id: 2, userId: 1, total: 50 },
  { id: 3, userId: 2, total: 200 },
  { id: 4, userId: 2, total: 75 },
  { id: 5, userId: 3, total: 300 },
];
