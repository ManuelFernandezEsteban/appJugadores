import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingValueComponent } from './rating-value.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RatingValueComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ], 
  exports: [
    RatingValueComponent
  ]
})
export class RatingValueModule { }
