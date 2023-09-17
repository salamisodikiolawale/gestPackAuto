import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecetteService } from '../recette.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';

@Component({
  selector: 'app-update-conducteur',
  templateUrl: './update-conducteur.component.html',
  styleUrls: ['./update-conducteur.component.css']
})
export class UpdateConducteurComponent {
  //Variable pour créer le formulaire de connexion
  conducteurForm = new FormGroup({
    nom: new FormControl(''),
    prenoms: new FormControl(''),
    age: new FormControl(''),
    experience: new FormControl(''),
    contact: new FormControl(''),
    adresse: new FormControl(''),
    _id: new FormControl(''),
  });

  conducteur: any = {};
  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private conducteurService: ConducteurService, private route:Router, private activatedRoute: ActivatedRoute){}


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.conducteur = {
        nom: params['nom'],
        prenoms: params['prenoms'],
        age: params['age'],
        experience: params['experience'],
        contact: params['contact'],
        adresse: params['adresse'],
        _id: params['_id'],
      };
      this.remplissageDesChampsDuFormulaire(this.conducteur);
    });
  }
  remplissageDesChampsDuFormulaire(recette: any) {
    this.conducteurForm.controls['nom'].setValue(this.conducteur.nom);
    this.conducteurForm.controls['prenoms'].setValue(this.conducteur.prenoms);
    this.conducteurForm.controls['age'].setValue(this.conducteur.age);
    this.conducteurForm.controls['experience'].setValue(this.conducteur.experience);
    this.conducteurForm.controls['contact'].setValue(this.conducteur.contact);
    this.conducteurForm.controls['adresse'].setValue(this.conducteur.adresse);
    this.conducteurForm.controls['_id'].setValue(this.conducteur._id);

  }


  onSubmit():void{
    this.conducteurService.modifierUnConducteur(this.conducteurForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/conducteurs']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }

  annuler() {
    this.route.navigate(['/conducteurs']);
  }
}