import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
id:any;
match:any={};
  constructor(private matchService:MatchesService, private router:Router,
    private activated:ActivatedRoute) { }

  ngOnInit(): void {
    //le module ActivatedRoute permet de snapshoter (capturer)
    // l'URL active et mapper pour faire retourner le parametre ID
    this.id=this.activated.snapshot.paramMap.get('id')
    this.matchService.getMatchByID(this.id).subscribe(
      data => { this.match=data.match ;}
    );
  }

}
