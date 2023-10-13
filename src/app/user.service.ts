import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  orgName: string = '';

  setOrgName(name: string) {
    this.orgName = name;
  }
}
