import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './view/student.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path : '',
    component : StudentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports : [RouterModule]
})
export class StudentRouterModule { }
