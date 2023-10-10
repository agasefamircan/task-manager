import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  static signIn: any;

  constructor() { }
  signIn(email: string, password: string): boolean {
    const storedEmail = localStorage.getItem('signupEmail');
    const storedPassword = localStorage.getItem('signupPassword');
    if (email===storedEmail && password===storedPassword ) {
      // this.isAuthenticated = true;
      return true;
    } else {
      // this.isAuthenticated = false;
      return false;
    }
  }

  signOut(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
