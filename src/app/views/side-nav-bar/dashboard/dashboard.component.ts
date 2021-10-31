import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  columnsToDisplay: string[] = [ 'Hotel', 'Room', 'Range'];
  dataSource: any[] = [];
  reservedInfo!: {
    Hotel: any,
    Room: any,
    Range:any
  };
  hotelResponse:any;
  constructor(private router: Router,
    private firebase: CrudServicesService) { }

  ngOnInit(): void {
    this.firebase.readAllHotel().subscribe((response: any) => {
      this.dataSource = []
      response.forEach((element: any) => {
        var roomIndex = -1
        var hotelData = element.payload.doc.data()
        hotelData.rooms.forEach((room:any) => {
          roomIndex += 1
          room.reserveDates.forEach((dates:any) => {
            var start = new Date(dates.start.seconds * 1000).toDateString()
            var end = new Date(dates.end.seconds * 1000).toDateString()
            this.reservedInfo = {
              Hotel:hotelData.userName,
              Room:roomIndex,
              Range: start + " - " + end
            }
            this.dataSource.push(this.reservedInfo)
          });
        });
      });

    })
  }
}
