import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VoitureService } from '../voiture.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent {

  //Variable pour créer le formulaire de connexion
  vehiculeForm = new FormGroup({
    immatricule: new FormControl(''),
    numSerie: new FormControl(''),
    typeDeTransport: new FormControl(''),
    nombreDeConduteur: new FormControl(''),
    zone: new FormControl(''),
    couleur: new FormControl(''),
    prix: new FormControl(''),
    _id: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  voiture: any = {};

  constructor(private vehiculeService: VoitureService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.voiture = {
        immatricule: params['immatricule'],
        numSerie: params['numSerie'],
        typeDeTransport: params['typeDeTransport'],
        nombreDeConduteur: params['nombreDeConduteur'],
        zone: params['zone'],
        couleur: params['couleur'],
        prix: params['prix'],
        _id: params['_id'],
      };
      this.remplissageDesChampsDuFormulaire(this.voiture);
    });
  }

  remplissageDesChampsDuFormulaire(voiture: any) {
    this.vehiculeForm.controls['immatricule'].setValue(this.voiture.immatricule);
    this.vehiculeForm.controls['numSerie'].setValue(this.voiture.numSerie);
    this.vehiculeForm.controls['typeDeTransport'].setValue(this.voiture.typeDeTransport);
    this.vehiculeForm.controls['nombreDeConduteur'].setValue(this.voiture.nombreDeConduteur);
    this.vehiculeForm.controls['zone'].setValue(this.voiture.zone);
    this.vehiculeForm.controls['couleur'].setValue(this.voiture.couleur);
    this.vehiculeForm.controls['prix'].setValue(this.voiture.prix);
    this.vehiculeForm.controls['_id'].setValue(this.voiture._id);

  }

  onSubmit(): void {
    this.vehiculeService.modifierUneVoiture(this.vehiculeForm.value).subscribe({
      next: (data) => {
        this.route.navigate(['/vehicules']);
      },
      error: (error) => {
        this.error = error.error.error;
      }
    });
  }

  annuler() {
    this.route.navigate(['/vehicules']);
  }
}
