import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UsersComponent implements OnInit {

  columnsToDisplay: string[] = ['userName', 'surname', 'mail', 'phone']
  dataSource: User[] = [];
  expandedElement: any | null;

  constructor(private firebase: CrudServicesService,
    private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.firebase.readAllUsers().subscribe((response: any) => {
      this.dataSource = [];
      response.forEach((element: any) => {
        let user = element.payload.doc.data();
        user.key = element.payload.doc.id;
        this.dataSource.push(user);

      });
    });

  }

  updateStatus(user:User){
    if(user.status == 1){
      user.status = 0
    }else{
      user.status = 1
    }
    this.firebase.updateUser(user)
  }

  removeUser(event: any) {
    let key = event.key
    this.firebase.deleteUser(key).then((response: any) => {
    })

    this.fireAuth.signInWithEmailAndPassword(event.mail, event.password)
      .then(() => {
        this.fireAuth.onAuthStateChanged((user) => {
          user?.delete()
        })
      })
  }
}



