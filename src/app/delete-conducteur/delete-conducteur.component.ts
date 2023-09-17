import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';

@Component({
  selector: 'app-delete-conducteur',
  templateUrl: './delete-conducteur.component.html',
  styleUrls: ['./delete-conducteur.component.css']
})
export class DeleteConducteurComponent {

  id: any = '';
  test:any = '';

  constructor(private route:Router, private conducteurService: ConducteurService, private activatedRoute:ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.someOtherFunction();
    });
  }
  
  someOtherFunction() {
    console.log("ext", this.id);
  }
  
    
  supprimerUnConducteur(){
      
      this.conducteurService.supprimerUnConducteur(this.id).subscribe({
      next: (data:any) => {
        this.route.navigate(['/conducteurs']);
      },
      error: (error:any) => {
        console.log(error);
      }
    })
  }

  annulerLaSuppression(){
    this.route.navigate(['/conducteurs']);
  }
  
}

