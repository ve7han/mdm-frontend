import { Privilege } from './privilege'
import { Emp } from './emp';

export class Role {
    id: number;
    role: string;
    privileges: Privilege[];
    emps: Emp[];
  
    constructor(id: number, role: string, privileges: Privilege[], emps: Emp[]) {
        this.id = id;
        this.role = role;
        this.privileges = privileges;
        this.emps = emps;
      }
    }