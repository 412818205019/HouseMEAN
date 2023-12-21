import { Component } from '@angular/core';
import { JobService } from '../../JobService.service'; // Update the path

@Component({
  selector: 'app-employerpage',
  templateUrl: './employerpage.component.html',
  styleUrls: ['./employerpage.component.css']
})
export class EmployerpageComponent {
  jobData: any = {};
  constructor(private jobService: JobService) { }

  submitJob(jobData: any) {
    // Assuming jobData contains all the form data
    this.jobService.postJob(jobData)
      .subscribe(
        response => {
          // Handle successful API response here
          console.log('Job posted successfully!', response);
          // Reset the form or perform any other actions upon success
        },
        error => {
          // Handle errors here
          console.error('Error posting job:', error);
        }
      );
  }
}
