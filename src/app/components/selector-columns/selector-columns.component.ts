import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-columns',
  templateUrl: './selector-columns.component.html',
  styleUrls: ['./selector-columns.component.css']
})
export class SelectorColumnsComponent implements OnInit {


  columna:string='';

  list:any[]=['GoalsSelection','SelectionNation','GoalChamp','League','YellowCard','SecondYellowCard','RedCard'];

  constructor() { }

  ngOnInit(): void {
  }

  selection(event: any){

  }

}
