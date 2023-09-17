import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
 
  constructor(private http:HttpClient) { }
  
  createUnConducteur(conducteur:any):Observable<any> {
    return this.http.post<any>('http://localhost:4002/creerUnConducteur', conducteur);
  }
  
  listeDesConducteurs():Observable<any>{
    return this.http.get<any>('http://localhost:4002/listeDesConducteurs');
  }
  
  supprimerUnConducteur(identifiant: string) {
    return this.http.delete<any>(`http://localhost:4002/supprimerUnConducteur/${identifiant}`);
  }

  modifierUnConducteur(conducteur:any):Observable<any>{
    return this.http.put<any>(`http://localhost:4002/modifierUnConducteur/${conducteur._id}`, conducteur);
  }
}
