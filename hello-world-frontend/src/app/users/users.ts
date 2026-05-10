import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { CreateUser } from './create-user/create-user'

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

  displayedColumns = ['firstName', 'lastName', 'role', 'delete'];

  constructor(private userService: UserService) { }

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

}