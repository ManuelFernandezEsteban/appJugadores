import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    //Material
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
