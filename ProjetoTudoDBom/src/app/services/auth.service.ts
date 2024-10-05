import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number;
  private isLoggedIn: boolean;

  constructor() { 
    this.userId = 0;
    this.isLoggedIn = false;
  }

  login(userId: number) {
    this.userId = userId;
    this.isLoggedIn = true;
  }

  logout() {
    this.userId = 0;
    this.isLoggedIn = false;
  }

  getUserId() {
    return this.userId;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}