import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//AdminLte
import { DashboardComponent } from './dashboard/dashboard.component';

//Users
import { LoginPageComponent } from './login-page/login-page.component';

//Dashboard

//Pipes
import { NeedAuthGuard } from './auth.guard';
import { DetailListComponent } from './details/detail-list/detail-list.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';
import { AddDetailsComponent } from './details/add-details/add-details.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'details', component: DetailListComponent, canActivate: [NeedAuthGuard] },
      { path: 'details/add', component: AddDetailsComponent, canActivate: [NeedAuthGuard] },
      { path: 'details/edit/:detailId', component: EditDetailsComponent, canActivate: [NeedAuthGuard] },
    ], canActivate: [NeedAuthGuard]
  },

  { path: 'login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
