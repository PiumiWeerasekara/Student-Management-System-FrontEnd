import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './view/pages/dashboard/view/dashboard.component';
import {NavComponent} from './view/nav/nav.component';
import {StudentComponent} from './view/pages/student/view/student.component';
import {MainComponent} from './view/main/main.component';
import {RegistrationComponent} from './view/pages/registration/view/registration.component';
import {LoginComponent} from './view/login/login.component';
import {AuthGuard} from './services/auth-service/auth.guard';
// import {RegistrationComponent} from './view/registration/registration.component';

const routes: Routes = [
//   {
//   path: 'main',
//   component: MainComponent
// },
// {
//   path: 'student',
//     component: StudentComponent
// },
// {
//   path: 'registration',
//     component: RegistrationComponent
// },
// {
//   path: '',
//     pathMatch: 'full',
//   redirectTo: '/main'
// }




  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: 'student',
  //       component: StudentComponent,
  //     }
  //   ]
  // }
  // {path: 'dashboard', component: DashboardComponent},
// {
//   path : '',
//   component : NavComponent,
//   children : [
//     {
//       path : 'dashboard',
//       component : DashboardComponent
//
//     },
//   {
//     path : 'student',
//     component : StudentComponent
//
//   },
//     { path: '',
//       redirectTo: '/nav',
//       pathMatch: 'full'
//     }
//
// ]
// }
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'nav', component: NavComponent},
//   {path: 'student', component: StudentComponent},
//   {path: 'registration', component: RegistrationComponent},


  {
    path : 'home',
    loadChildren : 'src/app/view/layout/home-layout/home-layout.module#HomeLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    loadChildren : 'src/app/view/layout/login-layout/login-layout.module#LoginLayoutModule'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // {path: 'login', component: LoginComponent}

  // {
  // path: 'nav',
  // component: NavComponent,
  // children: [
  // {path: 'dashboard', component: DashboardComponent},
  //   {
  //   path: '',
  //   pathMatch : 'full',
  //   redirectTo: '/nav/dashboard'
  // }

// ]
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
