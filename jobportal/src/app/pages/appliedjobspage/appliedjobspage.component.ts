import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appliedjobspage',
  templateUrl: './appliedjobspage.component.html',
  styleUrls: ['./appliedjobspage.component.css']
})
export class AppliedjobspageComponent implements OnInit {
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

  handleApply(jobId: string): void {
    alert('You have applied for the job!');
    // Implement your apply logic here
  }
}
