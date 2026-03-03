import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  model: any = {
    username: '',
    password: '',
  };

  login(loginForm: any) {
    if(this.model.username.includes('admin')) {
      localStorage.setItem('role', 'admin');
    } else if(this.model.username.includes('user')) {
      localStorage.setItem('role', 'user');
    } else {
      alert('Invalid username. Use "admin" or "user".');
      return;
    }     
    window.location.href = '/';
  }
}
