import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employerpostedjobspage',
  templateUrl: './employerpostedjobspage.component.html',
  styleUrls: ['./employerpostedjobspage.component.css']
})
export class EmployerpostedjobspageComponent implements OnInit {


  jobsData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs(): void {
    this.http.get<any>('http://localhost:5000/Housekeeper/all') // Update with your backend API URL
      .subscribe(
        (response) => {
          this.jobsData = response;
        },
        (error) => {
          console.error('Error fetching job details:', error);
        }
      );
  }

  handleDelete(jobId: string): void {
    console.log('Job ID:', jobId);
    if (confirm('Are you sure you want to delete this job?')) {
      this.http.delete<any>(`http://localhost:5000/Job/delete/${jobId}`) // Update with your delete API endpoint
        .subscribe(
          () => {
            // Remove the deleted job from the displayed list
            this.jobsData = this.jobsData.filter(job => job._id !== jobId);
            alert('Job deleted successfully!');
          },
          (error) => {
            console.error('Error deleting job:', error);
          }
        );
    }
  }
}
