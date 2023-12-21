import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { js_service } from '../../js_service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private jsService: js_service) {}

  onSubmit() {
    // Call the login method from js_service to authenticate user
    this.jsService.jobseekerLogin({ email: this.email, password: this.password }).subscribe(
      (response) => {
        if (response.message === 'Login successful') {
          this.isLoggedIn = true;
          sessionStorage.setItem('loggedInUser', this.email);
          this.router.navigate(['/profilepage']);
        } else {
          console.log('Login failed. Please try again.');
          // Perform actions for unsuccessful login if needed
        }
      },
      (error) => {
        console.error('Error during login:', error);
        // Handle error scenarios here
      }
    );
  }

  redirectToAnotherPage() {
    this.router.navigate(['/profilepage']);
  }

  // Function to store email in sessionStorage when reset password link is clicked
  storeEmailForReset() {
    sessionStorage.setItem('resetEmail', this.email);
  }
}
