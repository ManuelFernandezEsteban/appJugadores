import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColumnCheck } from 'src/app/interfaces/columnCheck.interface';

@Component({
  selector: 'app-selector-columns',
  templateUrl: './selector-columns.component.html',
  styleUrls: ['./selector-columns.component.css']
})
export class SelectorColumnsComponent implements OnInit {

  @Output() OnSelection=new EventEmitter<ColumnCheck>()

  selected!: ColumnCheck;
  columna:string='';

  list:any[]=['GoalsSelection','SelectionNation','GoalChamp','League','YellowCard','SecondYellowCard','RedCard'];

  constructor() { }

  ngOnInit(): void {
  }

  selection(event: any){

    
    this.selected={
      check:event.checked,
      column:event.source.value
    };
    

    //console.log(this.selected);
    this.OnSelection.emit(this.selected);

  }

}
