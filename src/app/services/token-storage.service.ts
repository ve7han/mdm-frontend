import { Injectable } from '@angular/core';
import { Token } from '../model/token';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
    //localStorage :pour sauvegarder les données au niveau du navigateur
    //sessionStorage : pour sauvegarder les données au niveau de la session utilisateur
  }
  public saveToken(token: Token): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public getToken(): Token | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }
  public getTokenValue(): string | null {
    const token = this.getToken();
    if (token) {
      return token.jwttoken;
    }
    return null;
  }
  public getRoles(): string | null {
    const token = this.getToken();
    if (token) {
      return token.role;
    }
    return null;
  }
  public getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      return token.username;
    }
    return null;
  }
  public hasRole(role: string): boolean | null {
    const token = this.getToken();
    if (token) {
      return token.role.includes(role);
    }
    return null;
  }
}

