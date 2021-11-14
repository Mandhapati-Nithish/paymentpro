import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/layout/landing/landing.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { httpInterceptor } from './interceptors';
import { AuthService } from '../users/services/auth.service';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule,
  ],
  exports:[HeaderComponent,FooterComponent,LandingComponent],
  providers:[AuthService,httpInterceptor],
})
export class CoreModule { }
