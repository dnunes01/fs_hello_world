import { Component, OnInit, signal } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  users = signal<any[]>([]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: users => this.users.set(users),
      error: err => console.error('Error loading users:', err)
    });
  }
}