import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  template: `
    <button (click)="signIn()">Sign In</button>
    <button (click)="signOut()">Sign Out</button>
    <div *ngIf="authService.isAuthenticatedUser()">User is authenticated</div>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager App';
  constructor(public authService: AuthService) {}

  signIn(): void {
    this.authService.signIn('admin@admin.com', 'admin');
  }

  signOut(): void {
    this.authService.signOut();
  }
}






