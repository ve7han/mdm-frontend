import { Component, OnInit } from '@angular/core';
import { faMobile, faNetworkWired, faUsers } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from '../services/emp.service';
import { DeviceService } from '../services/device.service';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {
  
  faNetworkWired = faNetworkWired;
  faUsers = faUsers;
  faMobile = faMobile;
  nombreEmployees: Number = 0;
  nombreDevices: Number = 0;
  nombreEntreprises: Number = 0;


  constructor(
    private employeeService: EmployeeService,
    private deviceService: DeviceService,
    private entrepriseService: EntrepriseService,

  ) {
   }

  ngOnInit(): void {
    this.getCountEmployee();
    this.getCountDevice();
    this.getCountEntreprise();
  }

  getCountEmployee(): any{
    this.nombreEmployees = 0;
    this.employeeService.getEmployeeCount().subscribe(
      (data: any) => {
        this.nombreEmployees = data;
      },
      (error) => {
        console.log('Error retrieving employees:', error);
      }
    );
  }

  getCountDevice(): any{
    this.nombreDevices = 0;
    this.deviceService.getCountDevice().subscribe(
      (data: any) => {
        this.nombreDevices = data;
      },
      (error) => {
        console.log('Error retrieving employees:', error);
      }
    );
  }

  getCountEntreprise(): any{
    this.nombreEntreprises = 0;
    this.entrepriseService.getCountEntreprise().subscribe(
      (data: any) => {
        this.nombreEntreprises = data;
      },
      (error) => {
        console.log('Error retrieving employees:', error);
      }
    );
  }

}
