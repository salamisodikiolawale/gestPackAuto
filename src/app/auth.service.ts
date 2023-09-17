import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  
  createNewUser(user:Partial<{email:string|null, password:string|null}>):Observable<any> {
    console.log()
    return this.http.post<any>('http://localhost:4002/creerUnNouvUser', {email:user.email, password:user.password});
  }

  login(infoConnexion:Partial<{email:string|null, password:string|null}>):Observable<any>{
    return this.http.post<any>('http://localhost:4002/authentification', {email:infoConnexion.email, password:infoConnexion.password});
  }
}
