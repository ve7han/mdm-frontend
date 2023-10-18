import { Device } from './device'

export class Entreprise {
  id: number;
  nom: string;
  adresse: string;
  capitale: number;
  fondateur: string;
  secteur: string;
  date_creation: Date;
  devices: Device[];

  constructor(
    id: number,
    nom: string,
    adresse: string,
    capitale: number,
    fondateur: string,
    secteur: string,
    date_creation: Date,
    devices: Device[]
  ) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.capitale = capitale;
    this.fondateur = fondateur;
    this.secteur = secteur;
    this.date_creation = date_creation;
    this.devices = devices;
  }
}
