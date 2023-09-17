import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecetteService } from '../recette.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.css']
})
export class UpdateRecetteComponent {

  //Variable pour créer le formulaire de connexion
  recetteForm = new FormGroup({
    immatricule: new FormControl(''),
    date: new FormControl(''),
    kilometrage: new FormControl(''),
    ObservationArrivee: new FormControl(''),
    ObservationDepart: new FormControl(''),
    montant: new FormControl(''),
    _id: new FormControl(''),
  });

  recette: any = {};
  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private recetteService: RecetteService, private route:Router, private activatedRoute: ActivatedRoute){}


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.recette = {
        immatricule: params['immatricule'],
        date: params['date'],
        kilometrage: params['kilometrage'],
        ObservationArrivee: params['ObservationArrivee'],
        ObservationDepart: params['ObservationDepart'],
        montant: params['montant'],
        _id: params['_id'],
      };
      this.remplissageDesChampsDuFormulaire(this.recette);
    });
  }
  remplissageDesChampsDuFormulaire(recette: any) {
    this.recetteForm.controls['immatricule'].setValue(this.recette.immatricule);
    this.recetteForm.controls['date'].setValue(this.recette.date);
    this.recetteForm.controls['kilometrage'].setValue(this.recette.kilometrage);
    this.recetteForm.controls['ObservationArrivee'].setValue(this.recette.ObservationArrivee);
    this.recetteForm.controls['ObservationDepart'].setValue(this.recette.ObservationDepart);
    this.recetteForm.controls['montant'].setValue(this.recette.montant);
    this.recetteForm.controls['_id'].setValue(this.recette._id);

  }


  onSubmit():void{
    this.recetteService.modifierUneRecette(this.recetteForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/recettes']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }

  annuler() {
    this.route.navigate(['/recettes']);
  }
}
