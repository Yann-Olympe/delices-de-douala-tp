import { Component, input, output } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../../models/restaurant';
import { RatingEvent } from '../../models/ratingEvent';

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  restaurants = input<Restaurant[]>();// recois la liste des info depuis app
  restaurantRated = output<RatingEvent>();

  onRestaurantRated(value:RatingEvent){
    this.restaurantRated.emit(value); // propagation de la note attribuer depuis le starRating
  }

}
