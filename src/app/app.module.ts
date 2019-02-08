import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/pages/dashboard/view/dashboard.component';
import { NavComponent } from './view/nav/nav.component';
import { StudentComponent } from './view/pages/student/view/student.component';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentService} from './services/studentService';
import {HttpClientModule} from '@angular/common/http';
// import { RegistrationComponent } from './view/registration/registration.component';
import {RegistrationService} from './services/registrationService';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './view/pages/registration/view/registration.component';
import { MainComponent } from './view/main/main.component';
import { LoginComponent } from './view/login/login.component';
import { LoginLayoutComponent } from './view/layout/login-layout/view/login-layout.component';
import {AuthService} from './services/auth-service/auth.service';
import {AuthGuard} from './services/auth-service/auth.guard';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    // DashboardComponent,
    // NavComponent,
    // StudentComponent,
    // RegistrationComponent,
    // MainComponent,
    // LoginComponent,
    // LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    RegistrationService,
    AuthService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
