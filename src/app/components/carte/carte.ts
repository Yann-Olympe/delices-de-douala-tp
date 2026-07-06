import { Component,inject,signal,computed } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';


@Component({
  selector: 'app-carte',
  imports: [CurrencyPipe],
  templateUrl: './carte.html',
  styleUrl: './carte.css',
})
export class Carte {
  
  // Injection du service MenuService pour accéder aux plats
  private readonly menuService  = inject(MenuService);
  readonly plats = this.menuService.plats;

  // Liste des catégories de plats
  categories = ['Toutes', 'Plats', 'Grillades', 'Végétarien', 'Boissons'];
  categorieSelectionee = signal<string >('Toutes'); // Signal pour stocker la catégorie sélectionnée, initialisée à "Toutes"
  platsFiltres = computed(() => this.categorieSelectionee()==='Toutes' ? this.plats.value()??[] : (this.plats.value()??[]).filter(plat => plat.categorie === this.categorieSelectionee())??[]); // Signal calculé pour filtrer les plats en fonction de la catégorie sélectionnée

  compteur = toSignal(interval(5000), {initialValue: 0}); // Signal pour compter le nombre de secondes écoulées, mis à jour toutes les 5 secondes
  platDujour = computed(() => {
    const plats = this.plats.value() ?? [];
    if (plats.length === 0) {
      return null; // Aucun plat disponible
    }
    const index = this.compteur() % plats.length; // Calcul de l'index du plat du jour en fonction du compteur
    return plats[index]; // Retourne le plat du jour
  });
}
