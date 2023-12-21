import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/Services.service';

@Component({
  selector: 'app-eregistration',
  templateUrl: './eregistration.component.html',
  styleUrls: ['./eregistration.component.css']
})
export class EregistrationComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  isRegisteredIn: boolean = false;

  constructor(private router: Router, private registrationService: Service) {}

  onSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
    };

    // Call the registration service to send data to the backend
    this.registrationService.registerUser(user).subscribe(
      response => {
        // Assuming successful registration, set isRegisteredIn to true
        this.isRegisteredIn = true;
        console.log('Registration successful:', response); // Log response to the console
      },
      error => {
        console.error('Registration failed:', error);
        // Handle error accordingly
      }
    );
  }

  redirectToAnotherPage() {
    // Your navigation logic to redirect to another page
    this.router.navigate(['/elogin']);
  }
}