import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'predict', component: PatientFormComponent },
  { path: 'search', component: SearchPatientComponent },
  { path: 'feedback', component: FeedbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
