import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  constructor(private matchesService:MatchesService) { }
  matches: any;
  ngOnInit(): void {
    this.matchesService.getAllMatches().subscribe(
      
      data => { this.matches = data.matches ;  });
        

}

}
