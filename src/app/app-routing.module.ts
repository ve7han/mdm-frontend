import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MainComponent } from './main/main.component';
import { DeviceCreateComponent } from './device-management/device-create/device-create.component';
import { DeviceEditComponent } from './device-management/device-edit/device-edit.component';
import { DeviceListComponent } from './device-management/device-list/device-list.component';
import { UsersCreateComponent } from './users-management/users-create/users-create.component';
import { UsersEditComponent } from './users-management/users-edit/users-edit.component';
import { UsersListComponent } from './users-management/users-list/users-list.component';
import { EntrepriseCreateComponent } from './entreprise-management/entreprise-create/entreprise-create.component';
import { EntrepriseEditComponent } from './entreprise-management/entreprise-edit/entreprise-edit.component';
import { EntrepriseListComponent } from './entreprise-management/entreprise-list/entreprise-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN', 'CHEF'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'users-management/users-create',
    component: UsersCreateComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'users-management/users-edit',
    component: UsersEditComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'users-management/users-list',
    component: UsersListComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN', 'CHEF'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'devices',
    component: DevicesComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN', 'CHEF'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'device-management/device-create',
    component: DeviceCreateComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'device-management/device-edit',
    component: DeviceEditComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow all roles
    // Add AuthGuard to the route
  },
  {
    path: 'device-management/device-list',
    component: DeviceListComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN', 'CHEF'] } // Allow all roles
    // Add AuthGuard to the route
  },

  {
    path: 'entreprises',
    component: EntreprisesComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] } // Allow SUPERADMIN and ADMIN
    // Add AuthGuard to the route
  },
  {
    path: 'entreprise-management/entreprise-create',
    component: EntrepriseCreateComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN'] } // Allow SUPERADMIN and ADMIN
    // Add AuthGuard to the route
  },
  {
    path: 'entreprise-management/entreprise-edit',
    component: EntrepriseEditComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN'] } // Allow SUPERADMIN and ADMIN
    // Add AuthGuard to the route
  },
  {
    path: 'entreprise-management/entreprise-list',
    component: EntrepriseListComponent,
    canActivate: [AuthGuardService],
    data: { allowedRoles: ['SUPERADMIN'] } // Allow SUPERADMIN and ADMIN
    // Add AuthGuard to the route
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService] // Add AuthGuard to the route
  },
  {
    path: 'home',
    component: SettingsComponent,
  },
 
  { path: 'logout', component: AuthComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
