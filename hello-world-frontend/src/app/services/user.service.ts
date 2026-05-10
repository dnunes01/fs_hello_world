import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>('http://localhost:8080/api/users');
  }

  createUser(user: any) {
    return this.http.post('api/users', user);
  }
}
