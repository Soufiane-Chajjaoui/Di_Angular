import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [
    
    // {provide : 'UserService' chaine de caractere s'apple aussi Cle injection  , useClass : UserService} si utilise cette way je peux utilise @inject('nomService il va inject')
  ],// cette method s'appel enregistre les dependencies
  bootstrap: [AppComponent]
})
export class AppModule { }
