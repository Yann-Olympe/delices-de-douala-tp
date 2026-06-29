import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restaurant } from './models/restaurant';
import { Header } from './components/header/header';
import { RestaurantCard } from './components/restaurant-card/restaurant-card';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { RatingEvent } from './models/ratingEvent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,RestaurantList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delices-de-douala-tp');
   restaurants = signal<Restaurant[]>([   
       { id: 1, name: 'Le Calao Doré', district: 'Akwa',     specialty: 'Ndolé aux crevettes', currentRating: 0 },
       { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso',     specialty: 'Eru aux pieds de bœuf', currentRating: 0 }, 
       { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo',     specialty: 'Poulet DG', currentRating: 0 }, 
       { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi',     specialty: 'Poisson braisé', currentRating: 0 },
       { id: 5, name: "L'Akwa Gourmand", district: 'Akwa',     specialty: 'Bobolo et sauce arachide', currentRating: 0 },
       { id: 6, name: 'Le Royal de Bali', district: 'Bali',     specialty: 'Koki et plantain', currentRating: 0 } ]); 
    
      ratedCount = computed(() => 
      this.restaurants().filter(r => r.currentRating > 0).length);


       onRestaurantRated(value:RatingEvent){
      this.restaurants.update(liste => 
        liste.map(r => 
          r.id===value.restaurantId?{
            ...r,currentRating : value.newRating
          }:r
        )
      )

    }

}
