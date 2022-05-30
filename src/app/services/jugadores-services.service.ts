import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player.interface';
import { PlayerApi } from '../interfaces/player-api.type';
import { Observable, map } from 'rxjs';
import { transformPlayersData } from '../utilities/transform-players-data';

@Injectable({
  providedIn: 'root'
})
export class JugadoresServicesService {
  public jugadores : Player[] =[];
  
  constructor(private http:HttpClient) { }

  getData():Observable<Player[]>{
    return this.http
      .get<PlayerApi[]>('../../assets/train.json')
      .pipe(map(transformPlayersData));
  }
}
