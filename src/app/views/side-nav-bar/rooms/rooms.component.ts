import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  clicked: boolean = false
  contGeneraterBtnTitle: string = 'more'
  hotel: any;
  activeRoom: any[] = [];
  key!: string;
  constructor(private firebase: CrudServicesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
      if (route['key'] != undefined)
        //  this.visible = false
        this.key = route['key']
      try {
        this.firebase.getHotel(this.key).subscribe((response: any) => {
          this.hotel = response;
          this.activeRoom = response.rooms
        });

      } catch (arr) { }
    })
  }


  getInfoToupdate(key: string, index: any) {
    this.route.navigate([`/main/reavtive/${key}/${index}`])
  }


  goToreservation(key: string, index: number) {
    this.route.navigate([`./main/reserve/${key}/${index}`])
  }

  deleteRoom(index: number) {
    this.activeRoom.splice(index, 1);
    this.hotel.rooms = this.activeRoom;
    this.firebase.updateHotel(this.hotel)
  }

  onBtnClick() {
    if (this.clicked == false) {
      this.clicked = true;
      this.contGeneraterBtnTitle = 'less'
    } else {
      this.clicked = false;
      this.contGeneraterBtnTitle = 'more'
    };
  }
}
