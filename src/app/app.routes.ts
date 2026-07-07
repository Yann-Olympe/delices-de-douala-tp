import { Routes } from '@angular/router';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { Carte } from './components/carte/carte';

export const routes: Routes = [
    {'path': '', component:RestaurantList },
    {'path' : 'menu', component:Carte }
];
