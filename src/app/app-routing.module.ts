import { UsersAddComponent } from './dashboard/users-page/users-add/users-add.component';
import { UsersComponent } from './dashboard/users-page/users/users.component';
import { UsersEditComponent } from './dashboard/users-page/users-edit/users-edit.component';
import { StationsEditComponent } from './dashboard/stations-edit/stations-edit.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { MenejmentComponent } from './dashboard/menejment/menejment.component';
import { ModulesEditComponent } from './dashboard/modules-edit/modules-edit.component';
import { DocsComponent } from './dashboard/docs/docs.component';
import { StationsComponent } from './dashboard/stations/stations.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { PanelPageComponent } from './dashboard/panel-page/panel-page.component';
import { ChartsPageComponent } from './dashboard/charts-page/chart-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ErrorComponent } from "./error/error.component";
import { UsersPageComponent } from './dashboard/users-page/user-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent, children:[
    {path:'', component:PanelPageComponent},
    {path:'panel', component:PanelPageComponent},
    {path:'stations', component:StationsComponent},
    {path:'charts',component:ChartsPageComponent},
    {path:'tables',component:TablesComponent},
    {path:'docs',component:DocsComponent},
    {path:'users-page',component:UsersPageComponent, children:[
      {path:'users-edit/:uuid',component:UsersEditComponent},
      {path:'users-add',component:UsersAddComponent},
      {path:'users',component:UsersComponent},
      ]},
    {path:'stations-edit',component:StationsEditComponent},
    {path:'modules-edit',component:ModulesEditComponent},
    {path:'menejment',component:MenejmentComponent},
    {path:'settings',component:SettingsComponent},
  ]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }
