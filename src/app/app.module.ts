import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import pour formulaire réactif (Reactive Forms)
import { ReactiveFormsModule } from '@angular/forms';

// Import pour les requêtes HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    SearchPatientComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  // Ajouté pour les formulaires
    HttpClientModule,   // Ajouté pour les appels HTTP
    FormsModule,
    AppRoutingModule // Import du module de routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
