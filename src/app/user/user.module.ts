import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectWithTokenService } from './inject-with-token.service';

export const UserServiceToken = new InjectionToken<string>('') ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [{provide : UserServiceToken, useClass : InjectWithTokenService}]
})
export class UserModule { }
