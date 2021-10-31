import { Component, OnInit } from '@angular/core';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  panelOpenState = false;
  allSales:any = [];
  constructor(private firebase: CrudServicesService) { }

  ngOnInit(): void {
    this.firebase.readAllSales().subscribe((response: any) => {
      this.allSales = [];
      response.forEach((element: any) => {
        var sale = element.payload.doc.data();
        sale.key = element.payload.doc.id;
        sale.range.start = element.payload.doc.data().range.start.toDate().toDateString()
        sale.range.end = element.payload.doc.data().range.end.toDate().toDateString()
        this.allSales.push(sale)
      });
      
    });
  }

  deleteSale(key:any){
    this.firebase.deleteSale(key)
  }

}
