import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumServiceService } from '../stadium-service.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium:any ={};
  stadiumForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private stadiumService:StadiumServiceService, private router:Router) { }

  ngOnInit(): void {
    this.stadiumForm=this.formBuilder.group({
      name:[''],
      country:[''],
      capacity:['']
  });
}
addStadium()
   {
    {
  
      this.stadiumService.addStadiumService(this.stadium).subscribe(
        () => {
          console.log('added successfully' , this.stadium);
          this.router.navigate(['admin']);
        }
      );
  
    }
   }
  }
