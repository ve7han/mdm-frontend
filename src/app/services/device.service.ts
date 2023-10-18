import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_GET_DEVICES_COUNT, API_GET_DEVICES, API_GET_DEVICE_BY_ID, API_CREATE_DEVICE, API_UPDATE_DEVICE, API_DELETE_DEVICE, API_DELETE_ALL_DEVICES, API_SORT_DEVICES, API_PAGINATION_DEVICES, API_FIND_DEVICES_BY_MARQUE, API_FIND_DEVICES_BY_MODELE,API_FIND_DEVICES_BY_NUMSRIE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  

  constructor(private http: HttpClient) { }

  getCountDevice():Observable<any> {
    return this.http.get(API_GET_DEVICES_COUNT);

  }

  getAll(): Observable<any> {
    return this.http.get(API_GET_DEVICES);
  }

  getById(id: string): Observable<any> {
    const url = API_GET_DEVICE_BY_ID.replace('{id}', id);
    return this.http.get(url);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_CREATE_DEVICE, data, { responseType: 'text' as 'json' });
  }

  update(data: any): Observable<any> {
    return this.http.put(API_UPDATE_DEVICE, data, { responseType: 'text' as 'json' });
  }

  delete(id: number): Observable<any> {
    const url = API_DELETE_DEVICE.replace('{id}', id.toString());
    return this.http.delete(url, { responseType: 'text' as 'json' });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_DELETE_ALL_DEVICES, { responseType: 'text' as 'json' });
  }

  sortBy(modele: string): Observable<any> {
    const url = API_SORT_DEVICES.replace('{modele}', modele);
    return this.http.get(url);
  }

  pagination(pageid: number, size: number): Observable<any> {
    const url = API_PAGINATION_DEVICES.replace('{pageid}', pageid.toString()).replace('{size}', size.toString());
    return this.http.get(url);
  }

  findByMarque(marque: string): Observable<any> {
    const url = API_FIND_DEVICES_BY_MARQUE.replace('{marque}', marque);
    return this.http.get(url);
  }

  findByModele(modele: string): Observable<any> {
    const url = API_FIND_DEVICES_BY_MODELE.replace('{modele}', modele);
    return this.http.get(url);
  }
  getbyNumSrie(numSrie: string): Observable<any> {
    const url = API_FIND_DEVICES_BY_NUMSRIE.replace('{numSrie}', numSrie);
    return this.http.get(url);
  }
}
