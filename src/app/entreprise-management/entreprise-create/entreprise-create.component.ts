import { Component } from '@angular/core';
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/entreprise';

@Component({
  selector: 'app-entreprise-create',
  templateUrl: './entreprise-create.component.html',
  styleUrls: ['./entreprise-create.component.scss']
})
export class EntrepriseCreateComponent {
  entreprise: Entreprise = new Entreprise(0, '', '', 0, '','', new Date(), []);

  constructor(private entrepriseService: EntrepriseService) {}

  createEntreprise(): void {
    this.entrepriseService.create(this.entreprise).subscribe(
      response => {
        console.log('Entreprise created:', response);
        this.resetForm();
      },
      error => {
        console.error('Error creating entreprise:', error);
      }
    );
  }

  resetForm(): void {
    this.entreprise = new Entreprise(0, '', '', 0, '','', new Date(), []);
  }
}
