import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/entreprise';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-edit',
  templateUrl: './entreprise-edit.component.html',
  styleUrls: ['./entreprise-edit.component.scss']
})
export class EntrepriseEditComponent implements OnInit {
  entreprise: Entreprise = new Entreprise(0, '', '', 0, '','', new Date(), []); // Provide a default value

  constructor(
    private entrepriseService: EntrepriseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getEntrepriseById(id);
    } else {
      console.error('Invalid entreprise id'); // Handle the case when the id is null
    }
  }

  getEntrepriseById(id: string): void {
    this.entrepriseService.getById(id).subscribe(
      (data: Entreprise) => {
        this.entreprise = data;
      },
      (error) => {
        console.error('Error getting entreprise:', error);
      }
    );
  }

  updateEntreprise(): void {
    this.entrepriseService.update(this.entreprise.id, this.entreprise).subscribe(
      response => {
        console.log('Entreprise updated:', response);
        this.router.navigate(['/entreprises']); // Redirect to entreprise list after update
      },
      error => {
        console.error('Error updating entreprise:', error);
      }
    );
  }
}
