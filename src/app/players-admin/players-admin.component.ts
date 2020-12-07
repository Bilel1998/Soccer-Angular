import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players-admin',
  templateUrl: './players-admin.component.html',
  styleUrls: ['./players-admin.component.css']
})
export class PlayersAdminComponent implements OnInit {
@Input() p:any;
  constructor(private playerService:PlayerService , private    router:Router) { }

  ngOnInit(): void {
  }
  delete(id:number)
  {
    this.playerService.deletePlayer(id).subscribe(
      () =>{ console.log("Player deleted successfully");
              this.router.navigate(['admin']) ;  
            }
    );

}
}