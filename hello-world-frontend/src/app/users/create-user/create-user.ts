import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser {
  
  @Output() userCreated = new EventEmitter<void>();

  form: any;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  submit() {
  if (this.form.invalid) return;

  this.userService.createUser(this.form.value).subscribe({
    next: () => {
      console.log('User created successfully');
      this.form.reset();
      this.userCreated.emit();   // ⭐ notify parent
    },
    error: (err) => {
      console.error('Error creating user:', err);
    }
  });



    console.log('Form submitted:', this.form.value);
  }
}
