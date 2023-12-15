import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoisService {

  constructor(private http:HttpClient) { }

  

  API='http://localhost:8083/SpringMVC/servlet'
  

  //afficher les données selon les Mois
  public getDataMois(): Observable<any[]>
  { 
    return this.http.get<any[]>(this.API+'/afficher-tous-Mois');
  }
}
