import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  nom: string = '';
  prenom: string = '';
  patient: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    this.patient = null;
    this.errorMessage = '';

const url = `http://localhost:8081/api/patients/search?nom=${this.nom}&prenom=${this.prenom}`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.patient = data;
      },
      error: (err) => {
        this.errorMessage = 'Patient non trouvé ou erreur serveur.';
      }
    });
  }
}
