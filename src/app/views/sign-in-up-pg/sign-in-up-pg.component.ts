import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in-up-pg',
  templateUrl: './sign-in-up-pg.component.html',
  styleUrls: ['./sign-in-up-pg.component.css']
})
export class SignInUpPgComponent implements OnInit {
  visibility:boolean = true
 
  constructor(private route:Router, private location: Location) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
    
  }

  goToRegistrationOrSignInComp(link: string){
    this.route.navigate([`/${link}`]);
  }

  goBack(): void {
    this.visibility = true;
    this.location.back();
  }

  componentAdded(){
    this.visibility = false;
  }
  

  componentRemoved(){
    this.visibility = true;
  }
}
