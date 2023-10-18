// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false
};

export const AUTH_API = 'http://localhost:8081/auth/signin';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const API_GET_EMPLOYEES_COUNT = 'http://localhost:8081/api/employees/count';
export const API_GET_EMPLOYEES = 'http://localhost:8081/api/employees/read';
export const API_GET_EMPLOYEES_BY_ID = 'http://localhost:8081/api/employees/read/{id}';
export const API_CREATE_EMPLOYEES = 'http://localhost:8081/api/employees/create';
export const API_UPDATE_EMPLOYEES = 'http://localhost:8081/api/employees/update/{id}';
export const API_DELETE_EMPLOYEES = 'http://localhost:8081/api/employees/delete/{id}';
export const API_SORT_EMPLOYEES = 'http://localhost:8081/api/employees/sort/{fieldName}';
export const API_GET_ROLES = 'http://localhost:8081/api/employees/{roles}';
export const API_PAGINATION_EMPLOYEES = 'http://localhost:8081/api/employees/pagination/{pageid}/{size}';
export const API_FIND_EMPLOYEES_BY_SALARY = 'http://localhost:8081/api/employees/read/{salary}';
export const API_FIND_EMPLOYEES_BY_FONCTION = 'http://localhost:8081/api/employees/read/{fonction}';
export const API_FIND_EMPLOYEES_BY_USERNAME = 'http://localhost:8081/api/employees/read/{username}';

export const API_GET_DEVICES_COUNT = 'http://localhost:8081/api/devices/count';
export const API_GET_DEVICES = 'http://localhost:8081/api/devices/read';
export const API_GET_DEVICE_BY_ID = 'http://localhost:8081/api/devices/read/{id}';
export const API_CREATE_DEVICE = 'http://localhost:8081/api/devices/create';
export const API_UPDATE_DEVICE = 'http://localhost:8081/api/devices/update{id}';
export const API_DELETE_DEVICE = 'http://localhost:8081/api/devices/delete/{id}';
export const API_DELETE_ALL_DEVICES = 'http://localhost:8081/api/devices/delete';
export const API_SORT_DEVICES = 'http://localhost:8081/api/devices/sort/{modele}';
export const API_PAGINATION_DEVICES = 'http://localhost:8081/api/devices/pagination/{pageid}/{size}';
export const API_FIND_DEVICES_BY_MARQUE = 'http://localhost:8081/api/devices/read/marque/{marque}';
export const API_FIND_DEVICES_BY_MODELE = 'http://localhost:8081/api/devices/read/modele/{modele}';
export const API_FIND_DEVICES_BY_NUMSRIE = 'http://localhost:8081/api/devices/read/numSrie/{numSrie}';

export const API_GET_ENTREPRISES_COUNT = 'http://localhost:8081/api/entreprises/count';
export const API_GET_ENTREPRISES = 'http://localhost:8081/api/entreprises/read';
export const API_GET_ENTREPRISE_BY_ID = 'http://localhost:8081/api/entreprises/read/{id}';
export const API_FIND_ENTREPRISES_BY_NAME = 'http://localhost:8081/api/entreprises/read/nom/{nom}';
export const API_CREATE_ENTREPRISE = 'http://localhost:8081/api/entreprises/create';
export const API_UPDATE_ENTREPRISE = 'http://localhost:8081/api/entreprises/update/{id}';
export const API_DELETE_ENTREPRISE = 'http://localhost:8081/api/entreprises/delete/{id}';
export const API_SORT_ENTREPRISES = 'http://localhost:8081/api/entreprises/sort/{nom}';
export const API_PAGINATION_ENTREPRISES = 'http://localhost:8081/api/entreprises/pagination/{pageid}/{size}';


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
