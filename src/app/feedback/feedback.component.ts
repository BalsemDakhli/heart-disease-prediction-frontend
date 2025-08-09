import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  rating: number = 0;
  comment: string = '';
  submitted = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  setRating(value: number) {
    this.rating = value;
  }

  submitFeedback() {
    if (this.rating === 0) {
      this.errorMessage = 'Veuillez sélectionner une note.';
      return;
    }

    const feedbackData = {
      rating: this.rating,
      message: this.comment  // ici 'message' au lieu de 'comment'

    };

    this.http.post('http://localhost:8081/api/feedback', feedbackData).subscribe({
      next: () => {
        this.submitted = true;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l\'envoi de votre feedback. Veuillez réessayer.';
      }
    });
  }
}
