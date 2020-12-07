import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  match: any = {};
  matchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matchService: MatchesService, private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    //le module ActivatedRoute permet de snapshoter (capturer)
    // l'URL active et mapper pour faire retourner le parametre ID
    this.id = this.activated.snapshot.paramMap.get('id')
    this.matchService.getMatchByID(this.id).subscribe(
      data => { this.match = data.match; }
    )
    this.matchForm = this.formBuilder.group({
      scoreOne: [''],
      scoreTwo: [''],
      teamOne: [''],
      teamTwo: ['']

    })
  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin'])
      }
    )

  }


}
