import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PlayersTableComponent } from './players-table/players-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    PlayersTableComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports:[
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    PlayersTableComponent
  ]
})
export class AngularMaterialModule { }
