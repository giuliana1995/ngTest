import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user-model/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  };

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  };

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  };
 
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  };

  patcheUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  };

  daleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/users/${id}`)
  };
  
  
}
