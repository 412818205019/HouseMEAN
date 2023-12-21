import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/Services.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private eloginService: Service) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    // Call the login service to send data to the backend
    this.eloginService.login(credentials.email, credentials.password).subscribe(
      response => {
        // Assuming successful login, set isLoggedIn to true
        this.isLoggedIn = true;
        console.log('Login successful:', response); // Log response to the console
        // Redirect to another page or perform additional actions
        this.router.navigate(['/employerpage']);
      },
      error => {
        console.error('Login failed:', error);
        // Handle error accordingly, e.g., display an error message
      }
    );
  }

  redirectToAnotherPage() {
    // Your navigation logic to redirect to another page
    this.router.navigate(['/employerpage']);
  }
  storeEmailForReset() {
    sessionStorage.setItem('resetEmail', this.email);
  }
}