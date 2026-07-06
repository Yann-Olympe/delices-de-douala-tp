import { Injectable,signal, inject } from '@angular/core';
import { Plat } from '../models/plats';
import { httpResource,HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly http = inject(HttpClient); // Injection du service HttpClient pour effectuer des requêtes HTTP
  private url = `${environment.serveUrl}/api/plats`; // URL de l'API pour récupérer les plats
  
  private readonly _plats = httpResource<Plat[]>(() => this.url); // Déclaration d'un signal pour stocker les plats
  plats = this._plats.asReadonly(); // Exposition du signal en lecture seule
}
