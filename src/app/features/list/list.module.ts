import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToListModule } from './add-to-list/add-to-list.module';
import { ListsService } from './lists.service';



@NgModule({
  declarations: [],
  providers: [
    ListsService
  ],
  imports: [
    CommonModule,
    AddToListModule
  ]
})
export class ListModule { }
