import { Inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private userService : UserService) {
    console.log('Http Service initialized');
   }
}
