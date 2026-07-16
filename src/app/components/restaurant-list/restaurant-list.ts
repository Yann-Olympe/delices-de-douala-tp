import { Component, inject, input, output } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../../models/restaurant';
import { RatingEvent } from '../../models/ratingEvent';
import { RestaurantService } from '../../services/restaurant.service';
import { Inscription } from "../inscription/inscription";

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard, Inscription],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  restaurants = inject(RestaurantService).restaurantsList;


}
