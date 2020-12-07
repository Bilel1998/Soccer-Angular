import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';
import { PlayerService } from '../services/player.service';
import { StadiumServiceService } from '../stadium-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tableau-utilisateurs',
  templateUrl: './tableau-utilisateurs.component.html',
  styleUrls: ['./tableau-utilisateurs.component.css']
})
export class TableauUtilisateursComponent implements OnInit {
  users: any;
  stadiums:any;
  players: any;
  matches: any;
  constructor(
    private matchService: MatchesService,
    private playerService:PlayerService,
    private stadiumService:StadiumServiceService,
    private userService: UserService,
    private router:Router
   ) { }

  ngOnInit(): void {
 
   
  
    this.getMatches();
    this.getUsers();
    this.stadiumService.getAllStadiums().subscribe(
      data =>  { this.stadiums= data.stadiums  }
    
    );
    console.log('******',this.stadiums);
  
  }
  getUsers()
  {
    this.userService.getAllusers().subscribe(
      data => {this.users= data.users}
    );
  }
  getMatches()
  {
    this.matchService.getAllMatches().subscribe(
      data =>  { this.matches=data.matches   }
    
    );
  }
  delete(id:string)  {
    this.matchService.deleteMatch(id).subscribe(
      () =>{ console.log("match deleted successfully");
              this.router.navigate(['admin']) ;  
              this.getMatches();
            }
    );
  }
  affiche(x) {
    alert(x);
  }
  edit(id:any)
  {
       this.router.navigate([`editMatch/${id}`])
  }
  display(id:any)
  {
    this.router.navigate([`displayMatch/${id}`])
  }
  updateStadiums(gettedStadiums: any) {
    this.stadiums = gettedStadiums;
  }
}
