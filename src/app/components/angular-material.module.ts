import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PlayersTableComponent } from './players-table/players-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SelectorColumnsComponent } from './selector-columns/selector-columns.component';
import { FormsModule } from '@angular/forms';
import { columnTransform } from '../pipes/columnTransform.pipe';


import { MatInputModule } from '@angular/material/input';
import { RatingValueModule } from './rating-value/rating-value.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    PlayersTableComponent,
    SelectorColumnsComponent,
    columnTransform
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule,
    MatInputModule,
    RatingValueModule,
    FormsModule
  ],
  exports:[
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    PlayersTableComponent,
    SelectorColumnsComponent
  ]
})
export class AngularMaterialModule { }
