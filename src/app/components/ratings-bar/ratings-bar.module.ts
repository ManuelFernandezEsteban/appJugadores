import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { RatingsBarComponent } from './ratings-bar.component';
import { RatingDisplayModule } from '../rating-display/rating-display.module';

@NgModule({
  declarations: [
    RatingsBarComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    RatingDisplayModule
  ],
  exports: [
    RatingsBarComponent
  ]
})
export class RatingsBarModule { }
