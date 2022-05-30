import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PlayerApi } from '../interfaces/player-api.type';
import { transformPlayersData } from '../utilities/transform-players-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  public get players() { return this._players; }
  private _players = this.http
    .get<PlayerApi[]>('../../assets/train.json')
    .pipe(map(transformPlayersData));
  
  constructor(private http:HttpClient) { }
}
