import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    email: '',
    password: '',
  };

  orgName = '';
  phone = '';
  address = '';
  userName = '';

  constructor(private router: Router) {}

  signUpAndSubmit() {
    if (!this.validateForm()) {
      return;
    }
    else{
      alert('User and organization profiles created successfully.');
      console.log('Email: ' + this.user.email);
      console.log('Password: ' + this.user.password);
      localStorage.setItem('signupEmail', this.user.email);
      localStorage.setItem('signupPassword', this.user.password);
      this.orgName = '';
      this.phone = '';
      this.address = '';
      this.userName = '';
      this.user.email = '';
      this.user.password = '';
    }

    this.router.navigate(['/signin']);
  }

  validateForm(): boolean {
    if (
      !this.orgName ||
      !this.phone ||
      !this.address ||
      !this.userName ||
      !this.user.email ||
      !this.user.password
    ) {
      alert('Please fill in all fields.');
      return false;
    }
    return true;
  }
}
