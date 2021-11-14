import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './components/layout/register/register.component';
import { LoginComponent } from './components/layout/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { httpInterceptor } from '../core/interceptors';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports:
    [CommonModule,FormsModule,HttpClientModule,
    UsersRoutingModule],
    providers: [AuthService,httpInterceptor],

 
})
export class UsersModule { }