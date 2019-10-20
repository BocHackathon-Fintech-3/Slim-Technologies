import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email: string;

  constructor() {
    this.email = localStorage.getItem('user');
  }


  getEmail(): string {
    return this.email;
  }

  isAdmin(): boolean {
    return this.email === 'admin@mail.com';
  }

  login(email: string) {
    this.email = email;
    localStorage.setItem('user', this.email);
  }
}
