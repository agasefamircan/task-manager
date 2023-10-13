import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  orgName: string = '';

  constructor(private userService: UserService) {
    this.userService.orgName&&((name: string) => {
      this.orgName = name;
    });
  }

  ngOnInit(): void {
    // take organization name from localStorage
    this.orgName = localStorage.getItem('signupOrgName') ?? '';
  }
}
