import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 /* fb = inject(FormBuilder);
  authService = inject(AuthService)
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  
  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(() => {})
    this.router.navigateByUrl('/landing')
  }
*/
  
  
}


