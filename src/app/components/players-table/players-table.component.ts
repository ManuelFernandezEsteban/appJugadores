import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../interfaces/player.interface';
import { MatTableDataSource } from "@angular/material/table";

import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  public jugadores: Player[] = [];
  displayedColumns: string[] = ['select','id', 'position', 'nation'];
  datasource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  seleccion=new SelectionModel<Player>(true,[]);

  constructor(public jugadoresService:PlayersService) { }

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
