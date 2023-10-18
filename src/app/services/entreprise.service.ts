import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_GET_ENTREPRISES_COUNT, API_GET_ENTREPRISES, API_GET_ENTREPRISE_BY_ID, API_FIND_ENTREPRISES_BY_NAME, API_CREATE_ENTREPRISE,API_UPDATE_ENTREPRISE,API_DELETE_ENTREPRISE,API_SORT_ENTREPRISES,API_PAGINATION_ENTREPRISES } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

   getCountEntreprise():Observable<any> {
    return this.http.get(API_GET_ENTREPRISES_COUNT);
   }

  getAll(): Observable<any> {
    return this.http.get(API_GET_ENTREPRISES);
  }
  
  getById(id: string): Observable<any> {
    const url = API_GET_ENTREPRISE_BY_ID.replace('{id}', id);
    return this.http.get(url);
  }

  findByName(nom: string): Observable<any> {
    const url = API_FIND_ENTREPRISES_BY_NAME.replace('{nom}', nom);
    return this.http.get(url);
  }

  create(entrepriseVo: any): Observable<any> {
    return this.http.post(API_CREATE_ENTREPRISE, entrepriseVo, { responseType: 'text' as 'json' });
  }

  update(entrepriseId: number, entrepriseVo: any): Observable<any> {
    const url = API_UPDATE_ENTREPRISE.replace('{id}', entrepriseId.toString());
    return this.http.put(url, entrepriseVo, { responseType: 'text' as 'json' });
  }

  delete(entrepriseId: number): Observable<any> {
    const url = API_DELETE_ENTREPRISE.replace('{id}', entrepriseId.toString());
    return this.http.delete(url, { responseType: 'text' as 'json' });
  }

  sortBy(nom: string): Observable<any> {
    const url = API_SORT_ENTREPRISES.replace('{nom}', nom);
    return this.http.get(url);
  }

  pagination(pageid: number, size: number): Observable<any> {
    const url = API_PAGINATION_ENTREPRISES.replace('{pageid}', pageid.toString()).replace('{size}', size.toString());
    return this.http.get(url);
  }
}