import { Component, signal,} from '@angular/core';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-app',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  restaurants = signal<Restaurant[]>([   
       { id: 1, name: 'Le Calao Doré', district: 'Akwa',     specialty: 'Ndolé aux crevettes', currentRating: 0 },
       { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso',     specialty: 'Eru aux pieds de bœuf', currentRating: 0 }, 
       { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo',     specialty: 'Poulet DG', currentRating: 0 }, 
       { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi',     specialty: 'Poisson braisé', currentRating: 0 },
       { id: 5, name: "L'Akwa Gourmand", district: 'Akwa',     specialty: 'Bobolo et sauce arachide', currentRating: 0 },
       { id: 6, name: 'Le Royal de Bali', district: 'Bali',     specialty: 'Koki et plantain', currentRating: 0 } ]); 

}
