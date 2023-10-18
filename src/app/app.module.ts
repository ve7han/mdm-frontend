import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { DevicesComponent } from './devices/devices.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { CategorieDevicesComponent } from './categorie-devices/categorie-devices.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { LastOperationsComponent } from './last-operations/last-operations.component';
import { SettingsComponent } from './settings/settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeviceCreateComponent } from './device-management/device-create/device-create.component';
import { DeviceEditComponent } from './device-management/device-edit/device-edit.component';
import { DeviceListComponent } from './device-management/device-list/device-list.component';
import { EntrepriseCreateComponent } from './entreprise-management/entreprise-create/entreprise-create.component';
import { EntrepriseListComponent } from './entreprise-management/entreprise-list/entreprise-list.component';
import { EntrepriseEditComponent } from './entreprise-management/entreprise-edit/entreprise-edit.component';
import { UsersCreateComponent } from './users-management/users-create/users-create.component';
import { UsersEditComponent } from './users-management/users-edit/users-edit.component';
import { UsersListComponent } from './users-management/users-list/users-list.component';







@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EntreprisesComponent,
    DevicesComponent,
    HeaderComponent,
    MainComponent,
    CategorieDevicesComponent,
    TopWidgetsComponent,
    LastOperationsComponent,
    SettingsComponent,
    AuthComponent,
    AdminPanelComponent,
    SidenavComponent,
    DeviceCreateComponent,
    DeviceEditComponent,
    DeviceListComponent,
    EntrepriseCreateComponent,
    EntrepriseListComponent,
    EntrepriseEditComponent,
    UsersCreateComponent,
    UsersEditComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
