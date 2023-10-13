import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService,
    private userService:UserService
    ) {}

  signIn = AuthService.signIn;
  AuthService: any;

  onSignIn() {
    if (this.authService.signIn(this.email, this.password)) {
      const orgName = this.authService.getOrgName();
      this.userService.setOrgName(orgName);

      // Refresh the page after navigation
      
      this.router.navigate(['/tasks']).then(() => {
        window.location.reload(); 
      });
    } else {
      alert('Invalid email or password. Please try again.');
    }
    // window.location.reload();
  }
}