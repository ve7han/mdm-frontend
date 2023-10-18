import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  API_GET_EMPLOYEES, API_GET_EMPLOYEES_BY_ID, API_CREATE_EMPLOYEES, API_UPDATE_EMPLOYEES, API_DELETE_EMPLOYEES, API_GET_ROLES, API_SORT_EMPLOYEES, API_PAGINATION_EMPLOYEES, API_FIND_EMPLOYEES_BY_SALARY, API_FIND_EMPLOYEES_BY_FONCTION, API_FIND_EMPLOYEES_BY_USERNAME, API_GET_EMPLOYEES_COUNT } from 'src/environments/environment';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeCount():Observable<any> {
    return this.http.get(API_GET_EMPLOYEES_COUNT);
  }

  getAll(): Observable<any> {
    return this.http.get(API_GET_EMPLOYEES);
  }

  getById(id: string): Observable<any> {
    const url = API_GET_EMPLOYEES_BY_ID.replace('{id}', id);
    return this.http.get(url);
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_GET_ROLES);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_CREATE_EMPLOYEES, data, { responseType: 'text' as 'json' });
  }

  update(data: any): Observable<any> {
    return this.http.put(API_UPDATE_EMPLOYEES, data, { responseType: 'text' as 'json' });
  }

  delete(id: number): Observable<any> {
    const url = API_DELETE_EMPLOYEES.replace('{id}', id.toString());
    return this.http.delete(url, { responseType: 'text' as 'json' });
  }

  sortBy(fieldName: string): Observable<any> {
    const url = API_SORT_EMPLOYEES.replace('{fieldName}', fieldName);
    return this.http.get(url);
  }

  pagination(pageid: number, size: number): Observable<any> {
    const url = API_PAGINATION_EMPLOYEES.replace('{pageid}', pageid.toString()).replace('{size}', size.toString());
    return this.http.get(url);
  }

  findBySalary(salary: number): Observable<any> {
    const url = API_FIND_EMPLOYEES_BY_SALARY.replace('{salary}', salary.toString());
    return this.http.get(url);
  }

  findByFonction(fonction: string): Observable<any> {
    const url = API_FIND_EMPLOYEES_BY_FONCTION.replace('{fonction}', fonction);
    return this.http.get(url);
  }

  findByUsername(username: string): Observable<any> {
    const url = API_FIND_EMPLOYEES_BY_USERNAME.replace('{username}', username);
    return this.http.get(url);
  }

}
