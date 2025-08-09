import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  patient = {
    age: null,
    sex: null,
    cp: null,
    trestbps: null,
    chol: null,
    fbs: null,
    restecg: null,
    thalach: null,
    exang: null,
    oldpeak: null,
    slope: null,
    ca: null,
    thal: null,
    nom: '',
    prenom: ''
  };

  result: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Données envoyées au backend :', this.patient); // ✅ utile pour debug

    this.http.post<any>('http://localhost:8081/api/predict', this.patient).subscribe({
      next: (res) => {
        this.result = res;
        console.log('Réponse reçue :', res);
      },
      error: (err) => {
        console.error('Erreur API:', err);
        alert('Erreur lors de la prédiction. Veuillez vérifier les données.');
      }
    });
  }
}
