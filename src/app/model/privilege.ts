import { Role } from './role'

export class Privilege {
    id: number;
    privilege: string;
    role: Role[];
  
    constructor(id: number, privilege: string, role: Role[]) {
        this.id = id;
        this.privilege = privilege;
        this.role = role;
    }
  }