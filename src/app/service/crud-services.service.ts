import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model'
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

  constructor( private firestore:AngularFirestore) { }


  createUser(user:User):any {
    return this.firestore
    .collection(environment.firebaseCollections.user)
    .add(user);
  }

  readAllUsers():any {
    return this.firestore
    .collection(environment.firebaseCollections.user)
    .snapshotChanges();
  }

  getUsers(key:string):any {
    return this.firestore
    .collection(environment.firebaseCollections.user)
    .doc(key)
    .valueChanges();
  }

  updateUser(user:User):any{
    return this.firestore
    .collection(environment.firebaseCollections.user)
    .doc(user.key)
    .update(user);
  }

  deleteUser(key:string):any {
    return this.firestore
    .collection(environment.firebaseCollections.user)
    .doc(key)
    .delete();
  }

  createHotel(Hotel:Hotel):any {
    return this.firestore
    .collection(environment.firebaseCollections.hotels)
    .add(Hotel);
  }

  readAllHotel():any {
    return this.firestore
    .collection(environment.firebaseCollections.hotels)
    .snapshotChanges();
  }

  getHotel(key:string):any {
    return this.firestore
    .collection(environment.firebaseCollections.hotels)
    .doc(key)
    .valueChanges();
  }

  updateHotel(hotel:Hotel):any{
    return this.firestore
    .collection(environment.firebaseCollections.hotels)
    .doc(hotel.key)
    .update(hotel);
  }

  deleteHotel(key:string):any {
    return this.firestore
    .collection(environment.firebaseCollections.hotels)
    .doc(key)
    .delete();
  }

  createSales(sale:any):any {
    return this.firestore
    .collection(environment.firebaseCollections.sales)
    .add(sale);
  }

  readAllSales():any {
    return this.firestore
    .collection(environment.firebaseCollections.sales)
    .snapshotChanges();
  }

  deleteSale(key:string):any {
    return this.firestore
    .collection(environment.firebaseCollections.sales)
    .doc(key)
    .delete();
  }
}
