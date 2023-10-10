import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
   
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  errorMessage=false;
  signIn = AuthService.signIn
  AuthService: any;



  onSignIn(){
    
    if (this.authService.signIn(this.email, this.password)) {
      this.router.navigate(['/']);
    }
    else{
      alert('Invalid email or password. Please try again.');
    }
  }
}
