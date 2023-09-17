import { Component } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-suppression',
  templateUrl: './suppression.component.html',
  styleUrls: ['./suppression.component.css']
})
export class SuppressionComponent {

  immatricule: any = '';
  test:any = '';

  constructor(private route:Router, private vehiculeService: VoitureService, private activatedRoute:ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.immatricule = params['immatricule'];
      console.log("int", this.immatricule);
      this.someOtherFunction();
    });
  }
  
  someOtherFunction() {
    console.log("ext", this.immatricule);
  }
  
    
  supprimerUneVoiture(){
      
      this.vehiculeService.supprimerUneVoiture(this.immatricule).subscribe({
      next: (data) => {
        this.route.navigate(['/vehicules']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  annulerLaSuppression(){
    this.route.navigate(['/vehicules']);
  }
  
}
