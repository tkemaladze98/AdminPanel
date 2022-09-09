import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() slides: any[] = [];

  intervalNumb: number = 5000;
  proportionNumb: number = 100;
}
