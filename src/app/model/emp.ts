import { Role } from './role';
import { Entreprise } from './entreprise';
import { Device } from './device';

export class Emp {
  id: number;
  username: string;
  password: string;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  accountNonExpired: boolean;
  roles: Role[]; // Change the type to Role[]
  // selectedRole: Role | null; // Change the type to Role | null
  salary: number;
  fonction: string;
  entreprise: Entreprise;
  devices: Device[];


  constructor(
    id: number,
    username: string,
    password: string,
    roles: Role[],
    enabled: boolean,
    accountNonExpired: boolean,
    credentialsNonExpired: boolean,
    accountNonLocked: boolean,
    fonction: string,
    salary: number,
    entreprise: Entreprise,
    devices: Device[]

  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.roles = roles;
    this.enabled = enabled;
    this.accountNonExpired = accountNonExpired;
    this.credentialsNonExpired = credentialsNonExpired;
    this.accountNonLocked = accountNonLocked;
    this.fonction = fonction;
    this.salary = salary;
    this.entreprise = entreprise;
    this.devices = devices;
    //this.selectedRole = null; // Initialize selectedRole as null initially
  }
}
