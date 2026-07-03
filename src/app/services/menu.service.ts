import { Injectable,signal } from '@angular/core';
import { Plat } from '../models/plats';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private readonly _plats =  signal<Plat[]>([]); // Déclaration d'un signal pour stocker les plats
    plats = this._plats.asReadonly(); // Exposition du signal en lecture seule
}
