import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { PositionSelectorComponent } from './position-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PositionSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    PositionSelectorComponent
  ]
})
export class PositionSelectorModule { }
