import { Component, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { PositionSimplified } from 'src/app/interfaces/position-simplified.enum';

@Component({
  selector: 'app-rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.css']
})
export class RatingDisplayComponent {
  @Input() title!: string;
  @Input() players!: Player[];
  @Input() priceRating = false;
  private selectedPosition?: PositionSimplified;

  public get displayed() {
    let players = this.players.slice(0);
    
    if (this.selectedPosition) {
      players = players.filter(
        player => player.positionSimplified === this.selectedPosition
      );
    }

    const rating = this.priceRating ? 'ratingPrice' : 'rating';

    return players.sort((a, b) => b[rating] - a[rating]).slice(0, 5);
  }  
  
  public selectPosition(position: PositionSimplified) {
    this.selectedPosition = position;
  }
}
