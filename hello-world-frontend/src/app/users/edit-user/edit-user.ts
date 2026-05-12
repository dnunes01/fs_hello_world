import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.scss',
})
export class EditUser {

  form!: FormGroup;   // <-- IMPORTANT: declare only, do NOT initialize

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUser>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // NOW we can safely use fb and data
    this.form = this.fb.group({
      firstName: [data.firstName],
      lastName: [data.lastName],
      role: [data.role]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
