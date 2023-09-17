import { Component } from '@angular/core';
import { DepenseService } from '../depense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-depense',
  templateUrl: './update-depense.component.html',
  styleUrls: ['./update-depense.component.css']
})
export class UpdateDepenseComponent {

  //Variable pour créer le formulaire de connexion
  depenseForm = new FormGroup({
    immatricule: new FormControl(''),
    date: new FormControl(''),
    montant: new FormControl(''),
    motif: new FormControl(''),
    _id: new FormControl(''),
  });

  depense: any = {};
  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private depenseService: DepenseService, private route:Router, private activatedRoute: ActivatedRoute){}


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.depense = {
        immatricule: params['immatricule'],
        date: params['date'],
        montant: params['montant'],
        motif: params['motif'],
        _id: params['_id'],
      };
      this.remplissageDesChampsDuFormulaire(this.depense);
    });
  }
  remplissageDesChampsDuFormulaire(depense: any) {
    this.depenseForm.controls['immatricule'].setValue(depense.immatricule);
    this.depenseForm.controls['date'].setValue(depense.date);
    this.depenseForm.controls['montant'].setValue(depense.montant);
    this.depenseForm.controls['motif'].setValue(depense.motif);
    this.depenseForm.controls['_id'].setValue(depense._id);
  }


  onSubmit():void{
    this.depenseService.modifierUneDepense(this.depenseForm.value).subscribe({
      next: (data) => {
       this.route.navigate(['/depenses']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }

  annuler() {
    this.route.navigate(['/depenses']);
  }
}
