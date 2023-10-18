
import { Entreprise } from "./entreprise";
import { Emp } from "./emp";

export class Device {
    id: number
    numSrie: string;
    marque: string;
    modele: string;
    entreprise: Entreprise;
    emp : Emp;
  
    constructor(id: number, numSrie: string, marque: string, modele: string, entreprise: Entreprise, emp: Emp) {
      this.id = id;
      this.numSrie = numSrie;
      this.marque = marque;
      this.modele = modele;
      this.entreprise = entreprise;
      this.emp = emp; // Set the entreprise ID
    }
  }