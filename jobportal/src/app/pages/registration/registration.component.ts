import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { js_service } from '../../js_service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  roomnumber: string = '';
  isRegisteredIn: boolean = false;

  constructor(private router: Router, private jobSeekerService: js_service) {}

  onSubmit() {
    const jobSeekerData = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
      roomnumber: this.roomnumber,
    };

    this.jobSeekerService.jobseekerReg(jobSeekerData).subscribe(
      (response) => {
        // Assuming successful registration
        this.isRegisteredIn = true;
        console.log('Registration successful:', response);
      },
      (error) => {
        // Handle error if needed
        console.error('Registration error:', error);
      }
    );
  }
  redirectToAnotherPage() {
    // Your navigation logic to redirect to another page
    this.router.navigate(['/login']);
  }
}
