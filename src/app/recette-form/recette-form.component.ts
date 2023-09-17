import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent {

  //Variable pour créer le formulaire de connexion
  recetteForm = new FormGroup({
    immatricule: new FormControl(''),
    date: new FormControl(''),
    kilometrage: new FormControl(''),
    ObservationArrivee: new FormControl(''),
    ObservationDepart: new FormControl(''),
    montant: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private recetteService: RecetteService, private route:Router){}


  onSubmit():void{
    this.recetteService.createUneRecette(this.recetteForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/recettes']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }
}
