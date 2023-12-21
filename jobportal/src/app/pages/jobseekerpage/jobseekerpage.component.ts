import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { js_service } from '../../js_service.service'; // Replace 'path-to-your-service' with the correct path

@Component({
  selector: 'app-jobseekerpage',
  templateUrl: './jobseekerpage.component.html',
  styleUrls: ['./jobseekerpage.component.css']
})
export class JobseekerpageComponent implements OnInit {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  roomnumber: string = '';
  isRegistered: boolean = false;

  constructor(private router: Router, private jobseekerService: js_service) {}

  ngOnInit() {
    this.getUserDataByEmail();
  }

  onSubmit() {
    // Your form submission logic here

    // Assuming successful form submission, set isRegistered to true
    this.isRegistered = true;
  }

  getUserDataByEmail() {
    const userEmail = sessionStorage.getItem('loggedInUser');

    if (userEmail) {
      this.jobseekerService.getUserByEmail(userEmail)
        .subscribe(
          (userData) => {
            // Populate form fields with user data retrieved from the service
            this.name = userData.name;
            this.email = userData.email;
            this.number = userData.number;
            this.roomnumber = userData.roomnumber;
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
    }
  }
}
