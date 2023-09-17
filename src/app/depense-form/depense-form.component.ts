import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepenseService } from '../depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depense-form',
  templateUrl: './depense-form.component.html',
  styleUrls: ['./depense-form.component.css']
})
export class DepenseFormComponent {
  
  //Variable pour créer le formulaire de connexion
  depenseForm = new FormGroup({
    immatricule: new FormControl(''),
    date: new FormControl(''),
    montant: new FormControl(''),
    motif: new FormControl(''),
    _id: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private depenseService: DepenseService, private route:Router){}


  onSubmit():void{
    this.depenseService.createUneDepense(this.depenseForm.value).subscribe({
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
    throw new Error('Method not implemented.');
  }
}
