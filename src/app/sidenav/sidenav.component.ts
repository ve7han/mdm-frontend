import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faCaretDown, faCaretUp, faCirclePlus, faDashboard, faGear, faHouse,faList,faMobile,faNetworkWired, faUsers } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
 
  faHouse = faHouse;
  faNetworkWired = faNetworkWired;
  faUsers = faUsers;
  faMobile = faMobile;
  faGear = faGear;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faCirclePlus = faCirclePlus;
  faList = faList;
  isTreeViewOpen: boolean = false;



  constructor(private tokenStorageService: TokenStorageService) {}

  toggleTreeView(): void {
    this.isTreeViewOpen = !this.isTreeViewOpen;
  }

  isLoggedIn(): boolean {
    return this.tokenStorageService.getToken() !== null;
  }
  
  isAdmin(): boolean {
    return <boolean>this.tokenStorageService.hasRole('ADMIN');
  }

  ngOnInit(): void {
    
  }

}
