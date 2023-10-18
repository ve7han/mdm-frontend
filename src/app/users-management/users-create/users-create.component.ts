import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from 'src/app/model/emp';
import { Role } from 'src/app/model/role'; // Import the Role model
import { EmployeeService } from 'src/app/services/emp.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  employee: Emp = {
    id: 0,
    username: '',
    password: '',
    enabled: true,
    roles: [],
    accountNonLocked: true,
    credentialsNonExpired: true,
    accountNonExpired: true,
    fonction: '',
    salary: 0,
    entreprise: {
      id: 0,
      nom: '',
      adresse: '',
      capitale: 0,
      secteur:'',
      date_creation: new Date(),
      fondateur: '',
      devices: []
    },
    // selectedRole: null,
    devices: [],

  };

  roles: any[] = [
    {id: 2, role:	'ADMIN', privileges: [], emps: []},
    {id: 3, role:	'CHEF', privileges: [], emps: []},
    {id: 4, role:	'EMPLOYEE', privileges: [], emps: []},
  ];

  roleSelected:any;//= {id:0, role:'', privileges: [], emps:[]};

  constructor(
    private tokenStorageService: TokenStorageService,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addRoleSuperAdmin();
  }

  addRoleSuperAdmin() {
    if(this.tokenStorageService.hasRole('SUPERADMIN')) {
      this.roles.push({id: 1, role:	'SUPERADMIN', privileges: [], emps: []});
    }
  }

 
  onRolesChange(): void {
    debugger;
    console.log('roles=>'+JSON.stringify(this.roleSelected));
    this.employee.roles = [this.roleSelected];
    // Check if the user is not a superadmin and if they select 'superadmin' role, reset the selected role to null.
    // if (!this.isSuperadmin() && this.employee.selectedRole?.role === 'superadmin') { // Notice the ?. operator
    //   this.employee.selectedRole = null;
    // }
  }

  isRoleDropdownDisabled(): boolean {
    // Disable the role dropdown if the user is not a superadmin.
    return !this.isSuperadmin();
  }

  isSuperadmin(): boolean {
    // Check if the user is a superadmin.
    return this.employee.roles.some(role => role.role === 'superadmin');
  }

  createEmployee(): void {
    this.employeeService.create(this.employee).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
        // Redirect to the employee list page or any other desired action
      },
      (error) => {
        console.error('Error creating employee:', error);
        // Handle errors appropriately
      }
    );
  }

}