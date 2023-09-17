import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';
import { DepenseService } from '../depense.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent {

  listeDesDepenses:any = [];
  totalDepenses:any = 0;

  constructor(private route: Router, private depenseService: DepenseService){}

  ngOnInit(){
    this.listeDepenses();
  }

  ajouterUneDepense(){
    this.route.navigate(['/ajouter-une-depense']);
  }

  listeDepenses(){
    this.depenseService.listeDesDepenses().subscribe({
      next: (data:any) => {
        this.listeDesDepenses = data.listeDesDepenses;
        this.totalDepenses = data.total;
      },
      error: (error:any) => {
        console.log(error);
      }
    })
  }

  modifier(recette:any){
    this.route.navigate(['/update-depense'], { queryParams: recette });
  }
}
