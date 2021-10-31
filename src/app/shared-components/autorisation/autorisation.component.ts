import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {
  userEmail!: string;
  userPassword!: string;

  constructor(private fireAuth: AngularFireAuth,
    private route: Router) { }

  ngOnInit(): void {
  }

  onbtnClick() {
    this.fireAuth.signInWithEmailAndPassword(this.userEmail, this.userPassword)
      .then((result: any) => {
        this.route.navigate(['/main/Dashboard'])
        this.fireAuth.onAuthStateChanged((user) => {
          localStorage.setItem('currentUser', user?.refreshToken as string);
        })
      }).catch((error: any) => {
        alert(error.message)
        this.userEmail = '';
        this.userPassword = '';
      })

  }

}
