import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Room } from 'src/app/models/room.model';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, OnDestroy {

  constructor(private firebase: CrudServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  @ViewChild('form') form!: NgForm;
  key: string = '';
  ProfPictur:any;
  otherPictures: any[] = [];
  visible:boolean = true;

  uploadFileEvt(imgFile: any) {
    let self = this;
    const reader = new FileReader();
    reader.readAsDataURL(imgFile.target.files[0]);
    reader.onload = function () {
      self.ProfPictur = reader.result;
    }
  }


  uploadMultFileEvt(imgFile: any) {
    let self = this;
    for(let i = 0; i < imgFile.target.files.length; i++){
    const reader = new FileReader();
    reader.readAsDataURL(imgFile.target.files[i]);
    reader.onload = function () {
      self.otherPictures.push(reader.result);
    }
  }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
     if (route['key'] != undefined){
      this.visible = false
      this.key = route['key']
      try {
        this.firebase.getHotel(this.key).subscribe((response: any) => {
          this.form.setValue({
            userName: response.userName,
            address: response.address,
            phone: response.phone,
            email: response.email,
            stars: response.stars,
            status: response.status,
           
          });
        })
      } catch (arr) { }}
    })

    
  }

  //დააფდეითება
  UpdateHotelInfo(form: NgForm) {
    var hotel = form.value as Hotel;
    console.log(hotel)
    hotel.key = this.key;
    this.firebase.updateHotel(hotel).then((response: any) => {
      this.form.reset()
    })
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  }

 arr: any[] = [];

  
onFormSubmit(form: NgForm) {
    (form.value as Hotel).profilePicture = this.ProfPictur;
    (form.value as Hotel).otherPictures = this.otherPictures;
    (form.value as Hotel).rooms = this.arr;
    
      var item = form.value as Hotel;
    console.log(JSON.stringify(item))
    this.firebase.createHotel(JSON.parse(JSON.stringify(item)))
      .then((response: any) => {
      })
      this.goBack()
    
  }

  //ფორმის გასუფთავება
  ngOnDestroy(): void {
    this.visible = true;
    // this.form.patchValue({});
  }
}
