import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './view/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children : [
      {path : 'dashboard',
      loadChildren : 'src/app/view/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path : 'student',
        loadChildren : 'src/app/view/pages/student/student.module#StudentModule'

      },
      {
        path : 'registration',
        loadChildren : 'src/app/view/pages/registration/registration.module#RegistrationModule'

      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeLayoutRouterModule { }
