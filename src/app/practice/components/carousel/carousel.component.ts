import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselIndex = 0;
  readonly carouselImages = [
    'https://picsum.photos/seed/carousel-1/300/180',
    'https://picsum.photos/seed/carousel-2/300/180',
    'https://picsum.photos/seed/carousel-3/300/180'
  ];

  previousImage(): void {
    this.carouselIndex = (this.carouselIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextImage(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselImages.length;
  }
}
