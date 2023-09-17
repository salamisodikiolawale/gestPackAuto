import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {

  //Variable pour créer le formulaire de connexion
  vehiculeForm = new FormGroup({
    immatricule: new FormControl(''),
    numSerie: new FormControl(''),
    typeDeTransport: new FormControl(''),
    nombreDeConduteur: new FormControl(''),
    zone: new FormControl(''),
    couleur: new FormControl(''),
    prix: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private vehiculeService: VoitureService, private route:Router){}


  onSubmit():void{
    this.vehiculeService.createUneVoiture(this.vehiculeForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/vehicules']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }

  annuler(){
    this.route.navigate(['/vehicules'])
  }
}
