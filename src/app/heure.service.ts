import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeureService {

 

  constructor(private http:HttpClient) { }

  API='http://localhost:8083/SpringMVC/servlet'
  

  //afficher les données selon les heures
  public getDataHeure(): Observable<any[]>
  { 
    return this.http.get<any[]>(this.API+'/afficher-tous-Heures');
  }


  //afficher les données d'accident par heure
  public afficherDateAccidentByHeure(heure: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/afficherAccidentDataByHeure/${heure}`);
  }

   //afficher les données des tues par heure
   public afficherDateTuesByHeure(heure: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/afficherTuesDataByHeure/${heure}`);
  }

   //afficher les données des blesses par heure
   public afficherDateBlessesByHeure(heure: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/afficherBlessesDataByHeure/${heure}`);
  }
}
