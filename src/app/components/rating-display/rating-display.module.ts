import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingDisplayComponent } from './rating-display.component';
import { MatCardModule } from '@angular/material/card';
import { PositionSelectorModule } from '../position-selector/position-selector.module';
import { RatingValueModule } from '../rating-value/rating-value.module';

@NgModule({
  declarations: [
    RatingDisplayComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PositionSelectorModule,
    RatingValueModule
  ],
  exports: [
    RatingDisplayComponent
  ]
})
export class RatingDisplayModule { }
