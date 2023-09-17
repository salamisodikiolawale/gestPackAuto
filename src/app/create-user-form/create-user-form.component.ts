import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
//Variable pour créer le formulaire de connexion
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});

error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

constructor(private authService: AuthService, private route:Router){}

onSubmit():void{
  this.authService.createNewUser(this.loginForm.value).subscribe({
    next: (data) => {
      //redirection vers la page de connexion
      this.route.navigate(['']);
    },
    error: (error) => {
      console.error(error.error.error)
      this.error = error.error.error;
    }
  });
}
}
