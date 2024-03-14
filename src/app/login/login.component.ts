import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth'
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
//Sign in conf 
export class LoginComponent {
  /*
  constructor(private auth: Auth, private router: Router) { }

 //login method
 login(email: string, password: string) {
  signInWithEmailAndPassword(this.auth, email, password).then(() => {
    (<any>this.router).navigate(['/store']);
  }, err => {
    alert(err.message);
    (<any>this.router).navigate(['/login']);
  })
}

  /*
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}
  async signIn() {
    try {
      const auth = getAuth(); // Retrieve the Auth object
      await signInWithEmailAndPassword(auth, this.email, this.password); // Sign in with email/password
      // Authentication successful, redirect or perform other actions
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  */
}

