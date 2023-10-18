import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';
import { faDashboard, faGear, faHouse,faMobile,faNetworkWired, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  faHouse = faHouse;
  faNetworkWired = faNetworkWired;
  faUsers = faUsers;
  faMobile = faMobile;
  faGear = faGear;

  isLoggedIn = false;
  isAdmin = false;
  isClient = false;
  username: string | null = null;
  usernameInitials: string | null = null;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateUserInfo();
      }
    });
  }

  private updateUserInfo(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.username = <string>this.tokenStorageService.getUsername();
      this.isAdmin = <boolean>this.tokenStorageService.hasRole('ADMIN');
      this.isClient = <boolean>this.tokenStorageService.hasRole('CLIENT');
      this.usernameInitials = this.getUsernameInitials(this.username);
    } else {
      this.username = null;
      this.isAdmin = false;
      this.isClient = false;
      this.usernameInitials = null;
    }
  }

  private getUsernameInitials(username: string | null): string | null {
    if (username) {
      const words = username.split(' ');
      let initials = '';
      for (const word of words) {
        if (word.length > 0) {
          initials += word[0];
        }
      }
      return initials;
    }
    return null;
  }

}
