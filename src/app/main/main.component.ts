import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/emp.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nombreEmplyees: Number = 0;

  constructor(
    private employeeService: EmployeeService 

  ) {
   }

  ngOnInit(): void {
  }

  getCountEmployee(): any{
    this.nombreEmplyees = 0;
    this.employeeService.getEmployeeCount().subscribe(
      (data: any) => {
        this.nombreEmplyees = data;
      },
      (error) => {
        console.log('Error retrieving employees:', error);
      }
    );
  }
}
