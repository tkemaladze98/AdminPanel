import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icons:string[] = ['mail', 'notifications', 'logout']
  constructor(private route: Router,
    private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  

  onbtnClick(icon:string){
    if(icon == "logout"){
      this.fireAuth.signOut
      localStorage.clear
      this.route.navigate(['/signInUp'])
    }
  }
}
