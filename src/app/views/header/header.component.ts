import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  icons: string[] = ['mail', 'notifications', 'logout'];
  constructor(private route: Router, private fireAuth: AngularFireAuth) {}

  onBtnClick(icon: string) {
    if (icon == 'logout') {
      this.fireAuth.signOut();
      this.route.navigate(['/signInUp']);
      localStorage.clear();
    }
  }
}
