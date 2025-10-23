import { Injectable } from '@angular/core';
import { User } from '../store/users';

@Injectable({
  providedIn: 'root'
})
export default class UserService {
  getUsers(): User[] {
    return [
      { id: 1, name: "Abraham" },
      { id: 2, name: "Isaac" },
      { id: 3, name: " Jacob" },
    ]
  }
}
