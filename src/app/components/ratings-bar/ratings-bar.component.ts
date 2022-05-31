import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-ratings-bar',
  templateUrl: './ratings-bar.component.html',
  styleUrls: ['./ratings-bar.component.css']
})
export class RatingsBarComponent {
  public players!: Player[];
  public get youngPlayers() {
    return this.players.filter(player => player.age <= 21);
  }
  
  constructor(
    private playersService: PlayersService
  ) {
    this.playersService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }
}
