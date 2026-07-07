import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive} from '@angular/router';
import { Restaurant } from './models/restaurant';
import { Header } from './components/header/header';
import { RestaurantCard } from './components/restaurant-card/restaurant-card';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delices-de-douala-tp');
  readonly restaurants = inject(RestaurantService);
  ratedCount = computed(() => this.restaurants.ratedCount());
  averageRating = computed(() => this.restaurants.averageRating());

}
