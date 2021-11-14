import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { httpInterceptor } from '../core/interceptors';
import { ProfileService } from '../profiles/services/profile.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { ExpModule } from '../exp/exp.module';
import { EduModule } from '../edu/edu.module';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [DashboardComponent, DashboardActionComponent],
  imports: [CommonModule, DashboardRoutingModule,ExpModule,EduModule ,HttpClientModule,CoreModule],
  providers: [httpInterceptor, ProfileService],
})
export class DashboardModule {}