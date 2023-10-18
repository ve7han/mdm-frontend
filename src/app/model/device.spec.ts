import { Device } from './device';
import { Entreprise } from './entreprise';

describe('Device', () => {
  it('should create an instance', () => {
    const device = new Device(
      1, // id
      'XYZ123456789', // numSrie
      'Samsung', // marque
      'S21', // modele
      1 // entreprise
    );

    expect(device).toBeTruthy();
  });
});