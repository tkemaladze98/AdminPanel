import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  unuvalableDate = (d: Date | null): boolean => {
    const day = (d || new Date())
    // Prevent Saturday and Sunday from being selected.
    return day >= new Date()

  }



  minDate = new Date()
  reserveDates: any[] = []
  key!: string;
  hotel!: Hotel;
  rooms!: any[];
  activeRoom!: any;
  index!: number;
  dateObj!: {
    start: any,
    end: any
  };
  check: boolean = false;
  dateArray: any[] = []
  constructor(private firebase: CrudServicesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
      this.key = route['key']
      this.index = route['index']
      try {
        this.firebase.getHotel(this.key).subscribe((response: any) => {
          this.hotel = response;
          this.rooms = response.rooms
          this.activeRoom = this.rooms[route['index']]
          this.reserveDates = []
        });
      } catch (arr) { }

    })
    setTimeout(() => {
      this.rooms[this.index].reserveDates.forEach((element: any) => {
        this.dateObj = {
          start: new Date(element.start.seconds * 1000),
          end: new Date(element.end.seconds * 1000)
        }
        this.reserveDates.push(this.dateObj);
        var start = element.start.seconds
        var end = element.end.seconds
        var oneDay = 60 * 60 * 24
        var dateRange = (end - start) / oneDay
        for (var i = 0; i <= dateRange; i++) {
          var date = new Date(start * 1000)
          date.setDate(date.getDate() + i);
          this.dateArray.push(date)
        }
      });
    }, 1000);
    
  }

  reserve(hotel: Hotel) {
    this.check = false
    this.dateArray.forEach(element => {
      if (this.range.value.start.toString() == element.toString() || this.range.value.end.toString() == element.toString()) {
        alert("some of these days are already reserved")
        this.check = true
      }
    })
    if (this.check == false) {
      hotel.key = this.key;
      this.reserveDates.push(this.range.value);
      this.rooms[this.index].reserveDates = this.reserveDates;
      (this.hotel as Hotel).rooms = this.rooms;
      this.firebase.updateHotel(this.hotel)
      this.route.navigate([`./main/Hotels`])
    }
    
  }


}
