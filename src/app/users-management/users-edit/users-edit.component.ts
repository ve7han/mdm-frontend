
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  employee: any = {}; // Replace any with the appropriate type for your Emp model

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Use ['id'] to access the route parameter
    this.employeeService.getById(id).subscribe(
      (data: any) => {
        this.employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateEmployee(): void {
    this.employeeService.update(this.employee).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/employees']); // Redirect to the employee list page
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

