import { Injectable } from '@angular/core';
import { User } from '../store/users';
import { mockUsers } from '../mock-data/users';

@Injectable({
  providedIn: 'root'
})
export default class UserService {
  getUsers(): User[] {
    return mockUsers;
  }
}
