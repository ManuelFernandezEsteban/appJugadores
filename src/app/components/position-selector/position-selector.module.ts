import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { PositionSelectorComponent } from './position-selector.component';

@NgModule({
  declarations: [
    PositionSelectorComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    PositionSelectorComponent
  ]
})
export class PositionSelectorModule { }
