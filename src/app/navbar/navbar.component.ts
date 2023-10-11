import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  orgName:string='';

  constructor(){}

  ngOnInit(): void {
    this.orgName = localStorage.getItem('signupOrgName') ?? "";
  }
  

}
