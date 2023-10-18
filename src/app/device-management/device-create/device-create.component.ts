import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../model/device';
import { Entreprise } from 'src/app/model/entreprise';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})

export class DeviceCreateComponent {
  devices: Device = {
    id: 0,
    numSrie: '',
    marque: '',
    modele: '',
    entreprise: {} as any,
    emp: {accountNonLocked: false,credentialsNonExpired:false, enabled:false, accountNonExpired:false} as any
};

employees : any[] = [];
entreprises : any[] = [];
selectedEmp: any;
selectedEntreprise: any;

  constructor(private deviceService: DeviceService, private tokenStorageService: TokenStorageService, private router: Router
    ) {
      this.createDevice();
    }

    ngOnInit(): void {
      this.getEmployees();
      this.getEntreprises();
    }

    getEmployees() {
      debugger;

    }

    getEntreprises() {
      
    }

  createDevice(): void {
    this.deviceService.create(this.devices).subscribe(
      (data: any) => {
        console.log('Device created successfully:', data);
        // Optionally, you can navigate to the device list page or perform other actions after creating the device.
        this.router.navigate(['/device-management/device-list']);
      },
      (error: any) => {
        console.error('Device creation error:', error);
        // Handle errors, display a message, or take other actions as needed.
      }
    );
  }
}