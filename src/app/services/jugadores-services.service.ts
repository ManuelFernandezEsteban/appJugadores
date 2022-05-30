import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadoresServicesService {

  public jugadores : Player[] =[];
  

  constructor(private http:HttpClient) { }

 

  getData():Observable<Player[]>{
    return this.http.get<Player[]>('../../assets/train.json');
    
  }

}
