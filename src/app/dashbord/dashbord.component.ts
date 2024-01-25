import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserHttpService } from '../services/user-http.service';
import { DashbordService } from './dashbord.service';
import { InjectWithTokenService } from '../user/inject-with-token.service';
import { UserServiceToken } from '../user/user.module';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers: [DashbordService]
})
export class DashbordComponent{

  // constructor(@Inject('UserService') public userService: UserService , public UserHttpService : UserHttpService){}

  constructor(
      public userService: UserService 
    , public UserHttpService : UserHttpService 
    , public dashbord : DashbordService 
    , @Inject(UserServiceToken) public tokenService : InjectWithTokenService ){
    }
}
