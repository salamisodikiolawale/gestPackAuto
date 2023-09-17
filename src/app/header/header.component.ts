import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';
import { DepenseService } from '../depense.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  totalDesRecettes:number = 0;
  totalDesDepenses:number = 0;
  caisse:number = 0;

  constructor(private route: Router){}

  

  //Fonction pour déconnecter l'utilisateur
  deconnexion():void{
     //1-suppression de l'email stoquer dans la mémoire du navigateur
    const email = localStorage.removeItem('email');
    if(email == null){
      //Rédirection vers la page de connexion
      this.route.navigate(['']);
    }
  }

  home():void{
   this.route.navigate(['/home']);
 }

  //Fonction pour verifier si l'utilisateur est conncté ou pas
  estConnecte():Boolean{
    const email = localStorage.getItem('email');
    if(email != null){
      return true;
    }else{
      return false;
    }
  }

}
