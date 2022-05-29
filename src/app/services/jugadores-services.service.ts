import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../interfaces/jugador.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadoresServicesService {

  public jugadores : Jugador[] =[];
  

  constructor(private http:HttpClient) { }

 

  getData():Observable<Jugador[]>{
    return this.http.get<Jugador[]>('../../assets/train.json');
    
  }

}
