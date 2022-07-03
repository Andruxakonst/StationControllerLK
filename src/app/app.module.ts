import { ChartsPageComponent } from './dashboard/charts-page/chart-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LeftMenuComponent } from './dashboard/left-menu/left-menu.component';
import { TopMenuComponent } from './dashboard/top-menu/top-menu.component';
import { UsersPageComponent } from './dashboard/users-page/user-page.component';
import { PanelPageComponent } from './dashboard/panel-page/panel-page.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { StationsEditComponent } from './dashboard/stations-edit/stations-edit.component';
import { DocsComponent } from './dashboard/docs/docs.component';
import { ModulesEditComponent } from './dashboard/modules-edit/modules-edit.component';
import { MenejmentComponent } from './dashboard/menejment/menejment.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { StationsComponent } from './dashboard/stations/stations.component';
import { UsersEditComponent } from './dashboard/users-page/users-edit/users-edit.component';
import { UsersComponent } from './dashboard/users-page/users/users.component';
import { UsersAddComponent } from './dashboard/users-page/users-add/users-add.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    ErrorComponent,
    FooterComponent,
    TopMenuComponent,
    LeftMenuComponent,
    UsersPageComponent,
    ChartsPageComponent,
    PanelPageComponent,
    TablesComponent,
    StationsEditComponent,
    DocsComponent,
    ModulesEditComponent,
    MenejmentComponent,
    SettingsComponent,
    StationsComponent,
    UsersEditComponent,
    UsersComponent,
    UsersAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
