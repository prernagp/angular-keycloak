import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  hitLogin() {
    return axios.post('http://localhost:3001/auth/keycloak', 
    {
      'client_id': 'android',
      'client_secret': 'ymCr1fSfodHbgh5z7c9dH5kJ7FQ5GwWr'
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}

