import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/entreprise';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent  {
  entreprises: Entreprise[] = [];
  searchId: string = '';

  faMagnifyingGlass = faMagnifyingGlass;
  faSearch = faSearch;

  constructor(
    private entrepriseService: EntrepriseService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loadEntreprises();
  }

  isLoggedIn(): boolean {
    return this.tokenStorageService.getToken() !== null;
  }


  loadEntreprises(): void {
    this.entrepriseService.getAll().subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteEntreprise(entrepriseId: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette entreprise ?')) {
      this.entrepriseService.delete(entrepriseId).subscribe(
        () => {
          // Entreprise deleted successfully, update the entreprise list
          this.entreprises = this.entreprises.filter(entreprise => entreprise.id !== entrepriseId);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  searchEntreprise(): void {
    if (this.searchId.trim() !== '') {
      // Check if the searchId is a number (ID)
      if (!isNaN(Number(this.searchId))) {
        this.entrepriseService.getById(this.searchId).subscribe(
          (data: Entreprise) => {
            this.entreprises = [data];
          },
          (error: any) => {
            console.log(error);
            alert('ID not found');
          }
        );
      } else {
        this.searchByName(this.searchId);
      }
    }
  }

  searchByName(nom: string): void {
    this.entrepriseService.findByName(nom).subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  editEntreprise(entrepriseId: number): void {
    this.router.navigate(['entreprise-management/entreprise-edit', entrepriseId]);
  }
}
