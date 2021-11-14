import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpAddComponent} from './components/exp-add/exp-add.component';

const routes: Routes = [{path:'add-experience',component: ExpAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpRoutingModule { }
