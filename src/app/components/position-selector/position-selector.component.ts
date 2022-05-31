import { Component, Output, EventEmitter } from '@angular/core';
import { PositionSimplified } from 'src/app/interfaces/position-simplified.enum';

@Component({
  selector: 'app-position-selector',
  templateUrl: './position-selector.component.html',
  styleUrls: ['./position-selector.component.css']
})
export class PositionSelectorComponent {
  public positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
  
  public set position(position: PositionSimplified) {
    this.selectedPosition.emit(position);
  }

  @Output() selectedPosition = new EventEmitter<PositionSimplified>();
}
