import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';

@Component({
  selector: 'app-conducteurs',
  templateUrl: './conducteurs.component.html',
  styleUrls: ['./conducteurs.component.css']
})
export class ConducteursComponent {



  listeConducteurs:any = [];
  total:number = 0;
  confirmation:string = '';
  isUpdate:boolean = false;
  
  constructor(private route:Router, private conducteurService: ConducteurService){}
  
  ngOnInit(){
    this.listeDesConducteurs();
  }
  
  ajouterNouvelleVoiture():void{
    this.route.navigate(['/creer-nouveau-conducteur']);
  }

  updateUnConducteur(voiture: any) {

    this.route.navigate(['/update-conducteur'], { queryParams: voiture });

  }

  listeDesConducteurs(){
    this.conducteurService.listeDesConducteurs().subscribe({
      next: (data:any) => {
        this.listeConducteurs = data.listeDesConducteurs;
        this.total = data.total;
      },
      error: (error:any) => {
        console.log("Conducteur", error)
      }
    })
  }

  supprimerUnConducteur(id:string){
    this.route.navigate(['/suppression-conducteur', id]);
  }
  
  

}
