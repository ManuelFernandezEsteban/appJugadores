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
  displayedColumns: string[] = ['select','id', 'position', 'nation', 'price', 'age', 'team', 'league'];
  displayedColumns2: string[] = ['id', 'position', 'nation', 'price', 'age', 'team', 'league'];
  datasource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  seleccion=new SelectionModel<Player>(true,[]);

  constructor(public jugadoresService:PlayersService) { }

  ColumnsSelecteds(column:ColumnCheck){
    console.log(column);
  }

  ngOnInit(): void {
    this.jugadoresService.getPlayers().subscribe((data)=>{
      this.jugadores=data;
      this.datasource=new MatTableDataSource<Player>(this.jugadores);
      this.datasource.paginator=this.paginator;
    });
  }

  onJugadorToggled(jugador: Player){
    this.seleccion.toggle(jugador);
    console.log(jugador);
    console.log(this.seleccion.selected);
  }
}
