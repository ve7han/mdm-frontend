import { Emp } from './emp';
import { Role } from './role'; // Import the necessary classes
import { Entreprise } from './entreprise';

describe('Emp', () => {
  it('should create an instance', () => {
    // Create an instance of Emp with the required parameters
    const emp = new Emp(
      1, // id
      'username',
      'password',
      [new Role(1, 'role',[],[])],      true, // enabled
      true, // accountNonExpired
      true, // credentialsNonExpired
      true, // accountNonLocked
      'fonction',
      50000, // salary
      new Entreprise(1, 'Company Name', 'Company Address', 1000000, 'Founder Name', 'Secteur', new Date(), []) // Provide Entreprise constructor arguments
    );
    
    expect(emp).toBeTruthy();
  });
});