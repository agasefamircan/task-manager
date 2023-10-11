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
    orgName: ''
  };

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
      console.log('OrgName: ' + this.user.orgName);
      localStorage.setItem('signupEmail', this.user.email);
      localStorage.setItem('signupPassword', this.user.password);
      localStorage.setItem('signupOrgName', this.user.orgName);
      this.user.orgName = '';
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
      !this.user.orgName ||
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
