import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number;

  constructor() { 
    this.userId = 0;
  }

  login(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}