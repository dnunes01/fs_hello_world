import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = '/api/users';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
