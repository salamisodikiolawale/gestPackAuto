import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';
import { DepenseService } from '../depense.service';

@Component({
  selector: 'app-total-visualisation',
  templateUrl: './total-visualisation.component.html',
  styleUrls: ['./total-visualisation.component.css']
})
export class TotalVisualisationComponent {

  totalDesRecettes:any = 0;
  totalDesDepenses:any = 0;
  caisse:any = 0;

  constructor(private route: Router, private recetteService: RecetteService, private depenseService: DepenseService){}

  ngOnInit(){
    this.totalDepenses();
    this.totalRecettes();
    this.montantEnCaisse();
  }

   totalRecettes(){
    this.recetteService.getTotalRecette().subscribe(total => {
      this.totalDesRecettes = total;
    });
  }

  totalDepenses(){
    this.depenseService.getTotalDepenses().subscribe(total => {
      this.totalDesDepenses = total;
    });
  }

  montantEnCaisse(){
    this.recetteService.montantEnCaisse().subscribe(montant => {
      this.caisse = montant.montantEnCaisse;
    });
  }
}
