import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilsRoutingModule } from './profiles-routing.module';
import { CreateProfileComponent } from './components/create/create-profile/create-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptor } from '../core/interceptors';
import { ProfileService } from './services/profile.service';


@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilsRoutingModule,HttpClientModule,FormsModule,
  ],
  providers: [httpInterceptor,ProfileService]
})
export class ProfilesModule { }
