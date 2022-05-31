import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.css']
})
export class RatingDisplayComponent implements OnInit {
  @Input() title!: string;
  @Input() players!: Player[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
