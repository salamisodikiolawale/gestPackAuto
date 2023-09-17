import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {

  listeDesRecettes:any = [];
  totalRecettes:any = 0;
  totalDesDepenses:any = 0;
  caisse:any = 0;

  constructor(private route: Router, private recetteService: RecetteService){}

 
  ngOnInit(){
    this.listeRecette();
  }

  ajouterUneRecette(){
    this.route.navigate(['/ajouter-une-recette']);
  }

  listeRecette(){
    this.recetteService.listeDesRecettes().subscribe({
      next: (data:any) => {
        this.listeDesRecettes = data.listeDesRecettes;
        this.totalRecettes = data.total;
      },
      error: (error:any) => {
        console.log(error);
      }
    })
  }

  modifier(recette:any){
    this.route.navigate(['/update-recette'], { queryParams: recette });
  }
}
