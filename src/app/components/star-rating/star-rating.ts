import { Component,input, output, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {

  currentRating = input<number>(0);
  ratingChanged = output<number>();

  star : number[]=[1,2,3,4,5];
  hoveredStar = signal(0);

  onStarClick (value:number){
      this.ratingChanged.emit(value);// on emet la valeur de l'etoile selectionnée vers le composant parent (restaurantCard)
  }

  //survol des etoiles
  onHover(position:number){
    this.hoveredStar.set(position); //on retient la position de l'etoile survolée
  }
  onLeaveHover(){
    this.hoveredStar.set(0); // on ne survole plus l'etoile hoverStar revient a 0
  }
}
