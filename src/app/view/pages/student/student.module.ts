import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from './view/student.component';
import {StudentRouterModule} from './student-router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
