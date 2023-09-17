import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit{
  
  listeVehicules:any = [];
  total:number = 0;
  confirmation:string = '';
  isUpdate:boolean = false;
  
  constructor(private route:Router, private vehiculeService: VoitureService){}
  
  ngOnInit(){
    this.listeDesVehicules();
  }
  
  ajouterNouvelleVoiture():void{
    this.route.navigate(['/creer-nouveau-vehicule']);
  }

  updateUneVoiture(voiture: any) {

    this.route.navigate(['/update-vehicule'], { queryParams: voiture });

  }

  listeDesVehicules(){
    this.vehiculeService.listeDesVoitures().subscribe({
      next: (data) => {
        this.listeVehicules = data.listeDesVehicules;
        this.total = data.total;
        console.log(this.listeVehicules)
      },
      error: (error) => {
        console.log("Vehicule", error)
      }
    })
  }

  supprimerUneVoiture(immatricule:string){
    this.route.navigate(['/suppression-vehicules', immatricule]);
  }
  
  

}
