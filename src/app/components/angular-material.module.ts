import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PlayersTableComponent } from './players-table/players-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderModule } from './header/header.module';
import { SelectorColumnsComponent } from './selector-columns/selector-columns.component';
import { FormsModule } from '@angular/forms';
import { columnTransform } from '../pipes/columnTransForm.pipe';



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
    HeaderModule,
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
