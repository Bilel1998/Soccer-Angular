import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
matchForm:FormGroup;
imagePreview:any;
  constructor(private formBuilder:FormBuilder, private matchService:MatchesService, private router:Router) { }

  ngOnInit() {
    this.matchForm=this.formBuilder.group({
      scoreOne:[''],
      scoreTwo:[''],
      teamOne:[''],
      teamTwo:[''],
      image:['']

    })
  }
  addMatch()
  {
  
    this.matchService.addMatchService(this.match,this.matchForm.value.image).subscribe(
      () => {
        console.log('added successfully');
        this.router.navigate(['admin']);
      }
    );

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ image: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
   

}
