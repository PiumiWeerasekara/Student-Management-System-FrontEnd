import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationRouterModule} from './registration-router.module';
import {RegistrationComponent} from './view/registration.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
