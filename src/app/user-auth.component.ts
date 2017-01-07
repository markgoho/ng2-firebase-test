import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
}
