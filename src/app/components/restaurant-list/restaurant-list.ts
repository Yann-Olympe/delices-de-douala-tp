import { Component } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {}
