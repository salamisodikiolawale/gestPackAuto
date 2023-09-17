import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  montantEnCaisse() {
    
    return this.http.get<any>('http://localhost:4002/montantEnCaisse');
  }
  
  constructor(private http:HttpClient) { }
  
  createUneRecette(recette:any):Observable<any>{
    return this.http.post<any>('http://localhost:4002/creerUneRecette', recette);
  }
  
  modifierUneRecette(recette:any):Observable<any>{
    return this.http.put<any>('http://localhost:4002/modifierUneRecette', recette);
  }

  listeDesRecettes():Observable<any>{
    return this.http.get<any>('http://localhost:4002/listeDesRecettes');
  }

  getTotalRecette():Observable<number>{
    return this.http.get<any>('http://localhost:4002/listeDesRecettes').pipe(
      map((data:any) => data.total)
      )
  }
  
}
