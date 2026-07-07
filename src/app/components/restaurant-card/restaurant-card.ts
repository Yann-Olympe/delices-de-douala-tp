import { Component, inject, input, output} from '@angular/core';
import { StarRating } from '../star-rating/star-rating';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  restaurant = input.required<Restaurant>();//donnee du restaurant
  private readonly restaurantRated = inject(RestaurantService);
  
  ratingChanged(value:number){
    const ratingEvent = {restaurantId:this.restaurant().id, newRating:value};
    this.restaurantRated.onRestaurantRated(ratingEvent); // on emet l'evenement vers le service restaurant pour mettre a jour la note du restaurant
 

  }
  
}
