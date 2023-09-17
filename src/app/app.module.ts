import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { RecettesComponent } from './recettes/recettes.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ConducteursComponent } from './conducteurs/conducteurs.component';
import { DepensesComponent } from './depenses/depenses.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { UpdateVoitureComponent } from './update-voiture/UpdateVoitureComponent';
import { RecetteFormComponent } from './recette-form/recette-form.component';
import { UpdateRecetteComponent } from './update-recette/update-recette.component';
import { DepenseFormComponent } from './depense-form/depense-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { UpdateDepenseComponent } from './update-depense/update-depense.component';
import { TotalVisualisationComponent } from './total-visualisation/total-visualisation.component';
import { ConducteurFormComponent } from './conducteur-form/conducteur-form.component';
import { UpdateConducteurComponent } from './update-conducteur/update-conducteur.component';
import { DeleteConducteurComponent } from './delete-conducteur/delete-conducteur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RecettesComponent,
    VehiculesComponent,
    ConducteursComponent,
    DepensesComponent,
    CreateUserFormComponent,
    AddVoitureComponent,
    SuppressionComponent,
    UpdateVoitureComponent,
    RecetteFormComponent,
    UpdateRecetteComponent,
    DepenseFormComponent,
    UpdateFormComponent,
    UpdateDepenseComponent,
    TotalVisualisationComponent,
    ConducteurFormComponent,
    UpdateConducteurComponent,
    DeleteConducteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
