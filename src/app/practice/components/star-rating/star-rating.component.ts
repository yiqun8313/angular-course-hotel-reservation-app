import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rating = 0;
  hoverRating = 0;
  readonly stars = [1, 2, 3, 4, 5];
}
