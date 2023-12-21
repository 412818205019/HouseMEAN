import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests

@Component({
  selector: 'app-jsresetpass',
  templateUrl: './jsresetpass.component.html',
  styleUrls: ['./jsresetpass.component.css']
})
export class JsresetpassComponent {
  resetPasswordForm: FormGroup;
  resetSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient // Inject HttpClient to make HTTP requests
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): null | { [key: string]: boolean } => {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }

    return null;
  };

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const resetEmail = sessionStorage.getItem('resetEmail');
      const password = this.resetPasswordForm.get('newPassword')?.value;
      
      console.log('Password:', password); 

      if (resetEmail && password) {
        // Make an HTTP POST request to your API endpoint
        this.http.post<any>(`http://localhost:5000/JobSeeker/updatepw`, { email: resetEmail, password }).subscribe(
          (response) => {
            if (response.message === 'Password updated successfully') {
              this.resetSuccess = true;
            } else {
              console.log('Failed to update password. Please try again.');
            }
          },
          (error) => {
            console.error('Error updating password:', error);
          }
        );
      } else {
        console.log('Reset email or new password is missing.');
      }
    } else {
      console.log('Invalid form. Please check the fields.');
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
