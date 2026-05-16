import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { CreateUser } from './create-user/create-user'
import { MatDialog } from '@angular/material/dialog';
import { EditUser } from './edit-user/edit-user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    CreateUser
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class UsersComponent implements OnInit {

  users = signal<any[]>([]);

  displayedColumns = ['firstName', 'lastName', 'role', 'edit', 'delete'];


  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: users => this.users.set(users),
      error: err => console.error('Error loading users:', err)
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users.set(users);
    });
  }

  deleteUser(user: any) {

    const confirmed = window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName} (ID: ${user.id})`);
    if (!confirmed) {
      return;
    }

    this.userService.deleteUser(user.id).subscribe({
      next: () => {
        console.log('User deleted');
        this.loadUsers();
      },
      error: (err) => console.error('Delete failed:', err)
    })
  }

  openEditDialog(user: any) {
    const dialogRef = this.dialog.open(EditUser, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedUser = { ...user, ...result };

        this.userService.updateUser(user.id, updatedUser).subscribe({
          next: ()=> {
            console.log('User updated');
            this.loadUsers();
          },
          error: err => console.error('Update failed:', err)
        })
      }
    });
  }


}