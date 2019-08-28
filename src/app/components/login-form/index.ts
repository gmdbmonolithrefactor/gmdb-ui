import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  /**
   * Initialize component
   * @desc sets initial state for component no load
   */
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Authenticate
   * @event handler for user authentication.
   */
  authenticate() {
    if (this.loginForm.valid) {
      // TODO: Connect user service to authenticate.
      console.log('Login success!');
      this.router.navigate(['/home'])
        .catch(err => console.error('ERROR', 'Could not navigate to home.', err));
    } else {
      console.log('Login failed.');
    }
  }
}
