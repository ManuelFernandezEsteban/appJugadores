import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-value',
  templateUrl: './rating-value.component.html',
  styleUrls: ['./rating-value.component.css']
})
export class RatingValueComponent {
  @Input() value!: number;
  @Input() icon!: string;
  
  public get rating() {
    if (this.value < 0.2) return 'veryBad';
    else if (this.value < 0.4) return 'bad';
    else if (this.value < 0.6) return '';
    else if (this.value < 0.8) return 'good';
    else return 'veryGood';
  }
}
