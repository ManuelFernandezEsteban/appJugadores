import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../interfaces/player.interface';
import { MatTableDataSource } from "@angular/material/table";

import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnCheck } from 'src/app/interfaces/columnCheck.interface';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

 // @Input()column!:ColumnCheck;
  

  public jugadores: Player[] = [];
  displayedColumns: string[] = ['select','id', 'position', 'nation', 'price', 'rating', 'ratingPrice', 'age', 'team', 'league'];
  displayedColumns2: string[] = ['id', 'position', 'nation', 'price', 'rating', 'ratingPrice', 'age', 'team', 'league'];
  datasource:any;

  selected: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  public positions = ['Goalkeeper', 'LeftWinger', 'RightWinger', 'AttackingMidfield', 'SecondStriker', 'Forward', 'LeftMidfield', 'CentralMidfield', 'Midfielder', 'RightMidfield', 'Defender', 'DefensiveMidfield']

  public nationSelected: string = '';


  seleccion=new SelectionModel<Player>(true,[]);

  constructor(public jugadoresService:PlayersService) { }

  ColumnsSelecteds(column:ColumnCheck){
    console.log(column);
    if(column.check){
      this.displayedColumns.push(column.column);

      this.displayedColumns2.push(column.column);
    }else{
      let posicion = this.displayedColumns.indexOf(column.column);
      this.displayedColumns.splice(posicion,1);
      posicion = this.displayedColumns2.indexOf(column.column);
      this.displayedColumns2.splice(posicion,1);      
    }

    
  }

  ngOnInit(): void {
    this.jugadoresService.getPlayers().subscribe((data)=>{
      this.jugadores=data;
      this.datasource=new MatTableDataSource<Player>(this.jugadores);
      this.datasource.paginator=this.paginator;
      console.log(this.jugadores);
    });
  }

  onJugadorToggled(jugador: Player){
    this.seleccion.toggle(jugador);
    console.log(jugador);
    console.log(this.seleccion.selected);
  }

  onChange(value:string) {
    console.log(value);
    this.selected = value;
    this.datasource=new MatTableDataSource<Player>(this.jugadores.filter(jugador => jugador.position===value))
  }

/*   onChangeNation(value:string){
    this.nationSelected = value;
    this.datasource=new MatTableDataSource<Player>(this.jugadores.filter(jugador => jugador.nation===value))
   } */
}
