import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GouvService {

  constructor(private http:HttpClient) { }

  API='http://localhost:8083/SpringMVC/servlet'
  

  //afficher les données selon les gouvernorat
  public getDataGouv(): Observable<any[]>
  { 
    return this.http.get<any[]>(this.API+'/afficher-tous-Gouvs');
  }

//afficher les données par nom du gouvernorat
  public afficherDateByGouvName(name: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/afficherDataByGouvName/${name}`);
  }
}
