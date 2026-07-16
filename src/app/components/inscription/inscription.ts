import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../models/Reservation';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {

  //champ  du form
    nom = '';
    email='';
    restaurant = '';
    numero = 0;
    date ='';

    private  _reservation = signal<Reservation[]>([]);
    reservation = this._reservation.asReadonly();

    _indexEdite = signal<number | null>(null);
    onEdition = computed(()=> this._indexEdite() !== null);

    enregistrer(){
  
      const i = this._indexEdite();

      // mode ajout
      if(i=== null){
      this._reservation.update(liste => [...liste,{
        nom:this.nom,
        email: this.email,
        restaurant: this.restaurant,
        numero: this.numero,
        date: this.date
      }])
    }else{ //mode modif

      this._reservation.update( liste => liste.map((r,idx) => idx ===i ?{
        nom:this.nom,
        email: this.email,
        restaurant: this.restaurant,
        numero: this.numero,
        date: this.date

      } : r))
      this._indexEdite.set(null)
    }
      this.nom = '';
      this.email= '';
      this.restaurant = '';
      this.numero = 0;
      this.date = ''

    }
  
    modifier(i : number){
      const reservation = this.reservation()[i];

      this.nom = reservation.nom;
      this.email =reservation.email;
      this.restaurant = reservation.restaurant;
      this.numero = reservation.numero;
      this.date = reservation.date;

      this._indexEdite.set(i);
      
    }

    supprimer(i:number){
      this._reservation.update(liste => liste.filter((_,idx)=> idx !== i));

    }
}
