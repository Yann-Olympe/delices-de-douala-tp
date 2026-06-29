import { Component } from '@angular/core';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {}
