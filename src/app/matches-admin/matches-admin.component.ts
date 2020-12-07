import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-matches-admin',
  templateUrl: './matches-admin.component.html',
  styleUrls: ['./matches-admin.component.css']
})
export class MatchesAdminComponent implements OnInit {
  @Input() m:any;

  constructor( private matchService:MatchesService , private  router:Router) { }

  ngOnInit(): void {

  }
  
  delete(id:string)  {
    this.matchService.deleteMatch(id).subscribe(
      () =>{ console.log("match deleted successfully");
              this.router.navigate(['admin']) ;  
            }
    );
  }
 

}
