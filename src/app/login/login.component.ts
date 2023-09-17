import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Variable pour créer le formulaire de connexion
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  error = ""; //Variable pour stoquer le message d'erreur lors de la connexion

  constructor(private authService: AuthService, private route:Router){}

  onSubmit():void{
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        //Enregistrement du mail utilisateur dans le navigateur
        localStorage.setItem("email", data.email);
        this.route.navigate(['/home']);
      },
      error: (error) => {
        console.error(error.error.error)
        this.error = error.error.error;
      }
    });
  }
}
