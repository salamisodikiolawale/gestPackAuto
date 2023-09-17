import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http:HttpClient) { }

  createUneDepense(depense:any):Observable<any>{
    return this.http.post<any>('http://localhost:4002/creerUneDepense', depense);
  }

  modifierUneDepense(depense:any):Observable<any>{
    return this.http.put<any>('http://localhost:4002/modifierUneDepense', depense);
  }

  listeDesDepenses():Observable<any>{
    return this.http.get<any>('http://localhost:4002/listeDesDepenses');
  }

  getTotalDepenses():Observable<number>{
    return this.http.get<any>('http://localhost:4002/listeDesDepenses').pipe(
      map((data:any) => {
        return data.total
      })
    )
  }
}
