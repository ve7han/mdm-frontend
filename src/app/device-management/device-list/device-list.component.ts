import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../model/device';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
  devices: Device[] = [];
  searchId: string = '';
  devicesByMarque: Device[] = [];
  devicesByModele: Device[] = [];

  faMagnifyingGlass = faMagnifyingGlass
  faSearch = faSearch

  constructor(private deviceService: DeviceService, private tokenStorageService: TokenStorageService, private router: Router
    ) {
    this.loadDevices();
  }

  isLoggedIn(): boolean {
    return this.tokenStorageService.getToken() !== null;
  }
  

  loadDevices(): void {
    this.deviceService.getAll().subscribe(
      (data: any) => {
        this.devices = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteDevice(deviceId: number): void {
    if (confirm('Voulez vous vraiment supprimer ce produit ?')) {
      this.deviceService.delete(deviceId).subscribe(
        () => {
          // Device deleted successfully, update the device list
          this.devices = this.devices.filter(device => device.id !== deviceId);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  searchDevice(): void {
    if (this.searchId.trim() !== '') {
      // Check if the searchId is a number (ID)
      if (!isNaN(Number(this.searchId))) {
        this.deviceService.getById(this.searchId).subscribe(
          (data: Device) => {
            this.devices = [data];
          },
          (error: any) => {
            console.log(error);
            alert('ID not found');
          }
        );
      } else {
        this.searchByMarque(this.searchId);
        
        this.searchByModele(this.searchId);
      }
    }
  }

  searchByMarque(marque: string): void {
    this.deviceService.findByMarque(marque).subscribe(
      (data: Device[]) => {
        this.devices = this.devices.concat(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  searchByModele(modele: string): void {
    this.deviceService.findByModele(modele).subscribe(
      (data: Device[]) => {
        this.devices = this.devices.concat(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  

  editDevice(deviceId: number): void {
    this.router.navigate(['/device-management/device-edit', deviceId]);
  }
}

