import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  

  constructor(private http:HttpClient) { }
  
  createUneVoiture(voiture:any):Observable<any> {
    return this.http.post<any>('http://localhost:4002/creerUnNouveauVehicule', voiture);
  }
  
  listeDesVoitures():Observable<any>{
    return this.http.get<any>('http://localhost:4002/listeDesVehicules');
  }
  
  supprimerUneVoiture(immatricule: string) {
    return this.http.delete<any>(`http://localhost:4002/supprimerUnVehicule/${immatricule}`);
  }

  modifierUneVoiture(voiture:any):Observable<any>{
    return this.http.put<any>(`http://localhost:4002/modifierUnVehicule/${voiture.immatricule}`, voiture);
  }
}
