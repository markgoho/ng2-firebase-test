import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
    <app-user-auth></app-user-auth>
    <app-retr-object></app-retr-object>
    <app-retr-list></app-retr-list>
    <app-query-list></app-query-list>
  </div>
  `,
})

export class AppComponent {

}
