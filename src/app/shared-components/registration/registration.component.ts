import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [CrudServicesService],
})
export class RegistrationComponent implements OnInit {
  userName!: string;
  userSurName!: string;
  userEmail!: string;
  userPhone!: number;
  userPassword!: string;
  userAge!: number;
  userGender!: any;

  constructor(
    private firebase: CrudServicesService,
    private fireAuth: AngularFireAuth,
    private location: Location
  ) {}

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  @ViewChild('fileInput') fileInput!: ElementRef;
  ProfPictur: any;
  user: User = new User('', '', '', '', 1, '', 0, 0, '', 0);

  uploadFileEvt(imgFile: any) {
    let self = this;
    const reader = new FileReader();
    reader.readAsDataURL(imgFile.target.files[0]);
    reader.onload = function () {
      self.ProfPictur = reader.result;
    };
  }

  onSubmit() {
    let user: User = new User(
      '',
      this.userName,
      this.userSurName,
      this.userEmail,
      this.userPhone,
      this.userPassword,
      this.userAge,
      this.userGender,
      this.ProfPictur,
      0
    );

    this.fireAuth
      .createUserWithEmailAndPassword(this.userEmail, this.userPassword)
      .then(() => {
        alert('success');
        this.location.back();
      })
      .catch((error: any) => {
        alert(error.message);
      });

    this.firebase.createUser(JSON.parse(JSON.stringify(user)));
  }
}
