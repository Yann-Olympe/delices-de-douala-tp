import { Routes } from '@angular/router';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { Carte } from './components/carte/carte';
import { Inscription } from './components/inscription/inscription';

export const routes: Routes = [
    {'path': '', component:RestaurantList },
    {'path' : 'menu', component:Carte },
    {'path':'reservation', component:Inscription}
];
