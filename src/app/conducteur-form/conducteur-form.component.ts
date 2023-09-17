import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetteService } from '../recette.service';
import { ConducteurService } from '../conducteur.service';

@Component({
  selector: 'app-conducteur-form',
  templateUrl: './conducteur-form.component.html',
  styleUrls: ['./conducteur-form.component.css']
})
export class ConducteurFormComponent {

  //Variable pour créer le formulaire de connexion
  conducteurForm = new FormGroup({
    nom: new FormControl(''),
    prenoms: new FormControl(''),
    age: new FormControl(''),
    experience: new FormControl(''),
    contact: new FormControl(''),
    adresse: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private conducteurService: ConducteurService, private route:Router){}


  onSubmit():void{
    this.conducteurService.createUnConducteur(this.conducteurForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/conducteurs']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }
}