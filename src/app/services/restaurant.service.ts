import { computed, Injectable, signal } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RatingEvent } from '../models/ratingEvent';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private readonly restaurants = signal<Restaurant[]>([   
       { id: 1, name: 'Le Calao Doré', district: 'Akwa',     specialty: 'Ndolé aux crevettes', currentRating: 0 },
       { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso',     specialty: 'Eru aux pieds de bœuf', currentRating: 0 }, 
       { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo',     specialty: 'Poulet DG', currentRating: 0 }, 
       { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi',     specialty: 'Poisson braisé', currentRating: 0 },
       { id: 5, name: "L'Akwa Gourmand", district: 'Akwa',     specialty: 'Bobolo et sauce arachide', currentRating: 0 },
       { id: 6, name: 'Le Royal de Bali', district: 'Bali',     specialty: 'Koki et plantain', currentRating: 0 } ]);
       readonly restaurantsList = this.restaurants.asReadonly(); // Exposition du signal en lecture seule 
    
      ratedCount = computed(() => 
      this.restaurantsList().filter(r => r.currentRating > 0).length);


       onRestaurantRated(value:RatingEvent){
      this.restaurants.update(liste => 
        liste.map(r => 
          r.id===value.restaurantId?{
            ...r,currentRating : value.newRating 
          }:r
        )
      )

    }
    averageRating = computed(() => {
      const noted = this.restaurantsList().filter(r => r.currentRating > 0);
      if (noted.length === 0) {
        return 0;
      }
      const totalRating = noted.reduce((sum, r) => sum + r.currentRating, 0);
      return totalRating / noted.length;
    })

}
