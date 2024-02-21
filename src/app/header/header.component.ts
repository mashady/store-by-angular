import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor() {}
}

/**



<ng-template carouselSlide>
      <img src="assets/slider/payment.jpg" height="300px" width="100%" />
    </ng-template>
    <ng-template carouselSlide>
      <img src="assets/slider/shoes.jpg" height="300px" width="100%" />
    </ng-template>
    <ng-template carouselSlide>
      <img src="assets/slider/sales22.jpg" height="300px" width="100%" />
    </ng-template>

*/
