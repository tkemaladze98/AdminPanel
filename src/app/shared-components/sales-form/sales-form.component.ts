import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {
  room:any;
  otherPictures:any;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  })
  unuvalableDate = (d: Date | null): boolean => {
    const day = (d || new Date())
    // Prevent Saturday and Sunday from being selected.
    return day >= new Date()

  }
  @ViewChild('form') form!: NgForm;
  @ViewChild('startDate') startDate!: any;
  @ViewChild('endDate') endDate!: any;
  cvForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private firebase: CrudServicesService,
    private location: Location) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.cvForm = this.formBuilder.group({
      size: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      picture: [null],
      key: [null],
      range: new FormGroup({
        start: new FormControl(),
        end: new FormControl()
      })
    })
  }

  uploadMultFileEvt(imgFile: any) {
    let self = this;
    for (let i = 0; i < imgFile.target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile.target.files[i]);
      reader.onload = function () {
        self.otherPictures = reader.result;
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
  onFormSubmit(form:any){
    (this.form.value as any).picture = this.otherPictures;
    this.firebase.createSales(form.value)
    this.goBack()
  }

}
