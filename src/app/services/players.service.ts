import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PlayerApi } from '../interfaces/player-api.type';
import { Player } from '../interfaces/player.interface';
import { transformPlayersData } from '../utilities/transform-players-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http:HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http
      .get<PlayerApi[]>('../../assets/train.json')
      .pipe(map(transformPlayersData));
  }
}
