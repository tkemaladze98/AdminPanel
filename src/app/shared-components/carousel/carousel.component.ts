import { AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
 @Input() slides:any[] = []
  constructor() { }

  ngOnInit(): void {}
  
  intervalNumb:number = 5000;
  proportionNumb:number = 100;
 
  

}
