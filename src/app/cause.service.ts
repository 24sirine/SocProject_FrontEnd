import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CauseService {

  constructor(private http:HttpClient) { }

  API='http://localhost:8083/SpringMVC/servlet'
  

  //afficher les données selon les causes
  public getDataCause(): Observable<any[]>
  { 
    return this.http.get<any[]>(this.API+'/afficher-tous-Causes');
  }
}
