import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userLoggedIn = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }
  submit() {
    if (this.form.status === 'VALID') {
      this.authService.login(<string>this.form.controls['username'].value,
        <string>this.form.controls['password'].value).subscribe({
          next: data => {
            this.tokenStorage.saveToken(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.userLoggedIn = <string>this.tokenStorage.getUsername();
            if (this.tokenStorage.hasRole('ADMIN')) {
              this.router.navigate(['/main']); // Redirect to the dashboard route for admin users
            } else {
              this.router.navigate(['/home']); // Redirect to a different route for non-admin users
            }          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
          complete: () => console.log("Fin")

        })
    }

  }

}
