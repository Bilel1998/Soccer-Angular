import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
   play:any;
  constructor(private playerService:PlayerService) {
   
   }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      data => { this.play = data ;}
);
  }

}
