import { Component, input, output} from '@angular/core';
import { StarRating } from '../star-rating/star-rating';
import { Restaurant } from '../../models/restaurant';
import { RatingEvent } from '../../models/ratingEvent';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  restaurant = input.required<Restaurant>();//donnee du restaurant
  restaurantRated = output<RatingEvent>(); // note du restaurant
  
  ratingChanged(value:number){
    // recuperration de la note du restaurant
      const ratingEventObject : RatingEvent = {restaurantId:this.restaurant().id, newRating:value}
 
    this.restaurantRated.emit(ratingEventObject);
    // on le repropage a restaurantList
  }
  
}
