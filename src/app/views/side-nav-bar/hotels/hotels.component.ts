import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  allHotels: any[] = [];
  constructor(private firebase: CrudServicesService, private route: Router) {}

  ngOnInit(): void {
    this.firebase.readAllHotel().subscribe((response: any) => {
      this.allHotels = [];
      response.forEach((element: any) => {
        let hotel = element.payload.doc.data();
        hotel.key = element.payload.doc.id;
        this.allHotels.push(hotel);
      });
    });
  }

  //სტატუსის დააფდეითება
  updateStatus(hotel: Hotel) {
    if (hotel.status == 1) {
      hotel.status = 0;
    } else {
      hotel.status = 1;
    }
    this.firebase.updateHotel(hotel);
  }

  getInfoToUpdate(key: string) {
    this.route.navigate([`./main/update/${key}`]);
  }

  getRooms(key: string) {
    this.route.navigate([`./main/Rooms/${key}`]);
  }

  deleteHotel(key: string) {
    this.firebase.deleteHotel(key).then((response: any) => {});
  }
}
