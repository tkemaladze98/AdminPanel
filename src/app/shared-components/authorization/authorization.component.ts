import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent {
  userEmail!: string;
  userPassword!: string;

  constructor(private fireAuth: AngularFireAuth, private route: Router) {}

  onBtnClick() {
    this.fireAuth
      .signInWithEmailAndPassword(this.userEmail, this.userPassword)
      .then((result: any) => {
        this.fireAuth.onAuthStateChanged((user) => {
          localStorage.setItem('currentUser', user?.refreshToken as string);
        });
        this.route.navigate(['/main/Dashboard']);
      })
      .catch((error: any) => {
        alert(error.message);
        this.userEmail = '';
        this.userPassword = '';
      });
  }
}
