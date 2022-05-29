import { Component, OnInit, ViewChild } from '@angular/core';
import { JugadoresServicesService } from '../../services/jugadores-services.service';
import { Jugador } from '../../interfaces/jugador.interface';
import { MatTableDataSource } from "@angular/material/table";

import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css']
})
export class TablaJugadoresComponent implements OnInit {

  public jugadores:Jugador[]=[];
  displayedColumns: string[] = ['select','id', 'position', 'nation'];
  datasource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  seleccion=new SelectionModel<Jugador>(true,[]);



  constructor(public jugadoresService:JugadoresServicesService) { 

   
    
  }

  ngOnInit(): void {
     this.jugadoresService.getData().subscribe((data)=>{
      this.jugadores=data;
      this.datasource=new MatTableDataSource<Jugador>(this.jugadores);
      this.datasource.paginator=this.paginator;
    });    
  }

  onJugadorToggled(jugador:Jugador){
    this.seleccion.toggle(jugador);
    console.log(jugador);
    console.log(this.seleccion.selected);
  }

}
