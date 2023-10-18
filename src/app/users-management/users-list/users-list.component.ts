import { Component } from '@angular/core';
import { Emp } from 'src/app/model/emp';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/emp.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  searchId: string = '';
  salaryInput: number = 0;
  searchByFonctionInput: string = '';
  employees: Emp[] = [];

  faMagnifyingGlass = faSearch;


  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void {
    this.employeeService.getAll().subscribe(
      (data: Emp[]) => {
        this.employees = data;
      },
      (error) => {
        console.log('Error retrieving employees:', error);
      }
    );
  }

  getRolesToString(roles: any[]): string {
    let rollesList = []
    if (roles && roles != null) {
      rollesList = roles.map(element => {
        return element.role;
      });
    }
    return rollesList.join(',');
  }


  searchEmployee(): void {
    if (this.searchId.trim() === '') {
      this.getEmployees();
      return;
    }

    this.employeeService.getById(this.searchId).subscribe(
      (data) => {
        this.employees = [data];
      },
      (error) => {
        console.log('Error searching employee:', error);
      }
    );
  }

  searchBySalary(salary: number): void {
    this.employeeService.findBySalary(salary).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log('Error searching employees by salary:', error);
      }
    );
  }

  searchByFonction(fonction: string): void {
    this.employeeService.findByFonction(fonction).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log('Error searching employees by fonction:', error);
      }
    );
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.delete(id).subscribe(
        () => {
          this.getEmployees();
        },
        (error) => {
          console.log('Error deleting employee:', error);
        }
      );
    }
  }
}