import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Route, Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  username: string | null | undefined;



  constructor(private tokenStorageService:TokenStorageService , private router:Router ,private route:ActivatedRoute ){}



  ngOnInit(): void {
    this.username = this.tokenStorageService.getUsername();
  }
  getUsernameInitials(username: string | null | undefined): string {
    if (username) {
      const initials = username.substr(0, 2);
      return initials.toUpperCase();
    }
    return '';
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate([{ outlets: { primary: 'login', contenu: null } }]);

  }
}
