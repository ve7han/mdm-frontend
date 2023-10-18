import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../model/device';


@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent {
  device?: Device;
  deviceId?: string;

constructor(
  private DeviceService: DeviceService,
  private route: ActivatedRoute,
  private router: Router
) {}
ngOnInit(): void {
  this.deviceId = this.route.snapshot.params['id'];
  this.getDeviceById();
}

getDeviceById(): void {
  if (this.deviceId) {
    this.DeviceService.getById(this.deviceId).subscribe(
      (response) => {
        this.device = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

updateDevice(): void {
  if (this.device) {
    this.DeviceService.update(this.device).subscribe(
      (response) => {
        console.log('Device updated successfully');
        this.router.navigate(['/device-management/device-list']); // Redirect to the device list page
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
}