import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpRoutingModule } from './exp-routing.module';
import { ExpComponent } from './components/exp/exp.component';
import{DisplayExpComponent} from './components/display-exp/display-exp.component';
import {ExpAddComponent} from './components/exp-add/exp-add.component';

import { EduAddComponent
 } from '../edu/components/edu-add/edu-add.component';
 import { ProfileService } from '../profiles/services/profile.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from '../core/interceptors';



@NgModule({
  declarations: [
    ExpComponent,DisplayExpComponent,ExpAddComponent,EduAddComponent
  ],
  imports: [
    CommonModule,
    ExpRoutingModule,FormsModule,HttpClientModule
  ],
  exports:[DisplayExpComponent],
  providers:[ProfileService,httpInterceptor],

})
export class ExpModule { }
