//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { RecettesComponent } from './recettes/recettes.component';
import { ConducteursComponent } from './conducteurs/conducteurs.component';
import { DepensesComponent } from './depenses/depenses.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { UpdateVoitureComponent } from './update-voiture/UpdateVoitureComponent';
import { RecetteFormComponent } from './recette-form/recette-form.component';
import { UpdateRecetteComponent } from './update-recette/update-recette.component';
import { UpdateDepenseComponent } from './update-depense/update-depense.component';
import { DepenseFormComponent } from './depense-form/depense-form.component';
import { ConducteurFormComponent } from './conducteur-form/conducteur-form.component';
import { UpdateConducteurComponent } from './update-conducteur/update-conducteur.component';
import { DeleteConducteurComponent } from './delete-conducteur/delete-conducteur.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', canActivate:[authGuard], component: HomeComponent },
  { path: 'recettes', canActivate:[authGuard], component: RecettesComponent },
  { path: 'conducteurs', canActivate:[authGuard], component: ConducteursComponent },
  { path: 'depenses', canActivate:[authGuard], component: DepensesComponent },
  { path: 'vehicules', canActivate:[authGuard], component: VehiculesComponent },
  { path: 'creer-nouveau-vehicule', canActivate:[authGuard], component: AddVoitureComponent },
  { path: 'creer-nouveau-conducteur', canActivate:[authGuard], component: ConducteurFormComponent },
  { path: 'update-vehicule', canActivate:[authGuard], component: UpdateVoitureComponent },
  { path: 'update-depense', canActivate:[authGuard], component: UpdateDepenseComponent },
  { path: 'update-recette', canActivate:[authGuard], component: UpdateRecetteComponent },
  { path: 'update-conducteur', canActivate:[authGuard], component: UpdateConducteurComponent },
  { path: 'suppression-vehicules/:immatricule', canActivate:[authGuard], component: SuppressionComponent },
  { path: 'suppression-conducteur/:id', canActivate:[authGuard], component: DeleteConducteurComponent },
  { path: 'ajouter-une-recette', canActivate:[authGuard], component: RecetteFormComponent },
  { path: 'ajouter-une-depense', canActivate:[authGuard], component: DepenseFormComponent },
  { path: 'ajouter-un-nouveau-gestionnaire', component: CreateUserFormComponent },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
