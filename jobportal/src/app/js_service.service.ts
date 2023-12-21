import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class js_service {
  private baseUrl = 'http://localhost:5000/User'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  jobseekerReg(jsData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, jsData);
  }

  jobseekerLogin(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all/${email}`); // Use the correct endpoint
  }
}
